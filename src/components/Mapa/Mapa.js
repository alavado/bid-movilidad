import React, { useState, useMemo } from 'react'
import ReactMapGL, { Source, Layer, NavigationControl, Popup } from 'react-map-gl'
import { obtenerDataLayer } from './mapStyle.js'
import { useSelector } from 'react-redux'
import style from './style.json'
import './Mapa.css'
import { obtenerFeaturesPais } from './helpers.js'
import GraficoComuna from '../GraficoComuna/index.js'

const Mapa = () => {

  const { dia, pais } = useSelector(state => state.mapa)

  const [popup, setPopup] = useState({
    activo: false,
    latitude: 0,
    longitude: 0,
    titulo: ''
  })

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 'calc(100vh - 88px)',
    latitude: -44.24,
    longitude: -70.01,
    zoom: 4,
    bearing: 57.09,
    pitch: 45.61,
    altitude: 1.5
  })

  const datos = useMemo(() => ({
    type: "FeatureCollection",
    features: obtenerFeaturesPais(pais).map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        ...Array.from(Array(180).keys()).reduce((prev, n) => ({...prev, [`v${n}`]: Math.random() }), {})
      }
    }))
  }), [pais])

  const cambioEnElViewport = vp => {
    setViewport({
      ...vp,
      width: '100%',
      height: 'calc(100vh - 88px)'
    })
  }

  const mostrarPopup = e => {
    console.log(e)
    setPopup({...popup, mostrando: false})
    setTimeout(() => {
      setPopup({
        mostrando: e.features.length > 0,
        latitude: e.lngLat[1],
        longitude: e.lngLat[0],
        titulo: e.features.length > 0 ? (pais === 'CL' ? e.features[0].properties.NOM_COM : e.features[0].properties.nam) : ''
      })
    }, 25)
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={cambioEnElViewport}
      mapStyle={style}
      className="Mapa"
      onClick={mostrarPopup}
    >
      <div style={{position: 'absolute', right: 16, top: 16}}>
        <NavigationControl />
      </div>
      <div className="Mapa__codigo_color" />
      {popup.mostrando &&
        <Popup
          latitude={popup.latitude}
          longitude={popup.longitude}
          closeButton={true}
          onClose={e => setPopup({...popup, mostrando: false})}
          className="PopupComuna"
        >
          <h1 className="PopupComuna__titulo">{popup.titulo}</h1>
          <GraficoComuna />
        </Popup>
      }
      <Source id="test" type="geojson" data={datos}>
        <Layer {...obtenerDataLayer(dia)} />
      </Source>
    </ReactMapGL>
  )
}

export default Mapa