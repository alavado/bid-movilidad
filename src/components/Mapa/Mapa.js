import React, { useState, useMemo } from 'react'
import ReactMapGL, { Source, Layer, NavigationControl, Popup } from 'react-map-gl'
import { obtenerDataLayer } from './mapStyle.js'
import { useSelector } from 'react-redux'
import style from './style.json'
import './Mapa.css'
import { obtenerFeaturesPais } from './helpers.js'
import CodigoColor from './CodigoColor'
import GraficoComuna from '../GraficoComuna'

const Mapa = () => {

  const { dia, pais } = useSelector(state => state.mapa)

  const [popup, setPopup] = useState({
    mostrando: false,
    latitude: 0,
    longitude: 0,
    titulo: ''
  })

  const [popupChico, setPopupChico] = useState({
    mostrando: false,
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

  const [cursor, setCursor] = useState('default')

  const datos = useMemo(() => ({
    type: "FeatureCollection",
    features: obtenerFeaturesPais(pais).map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        ...Array.from(Array(90).keys()).reduce((prev, n) => ({...prev, [`v${n}`]: Math.random() }), {})
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
    if (popup.mostrando) {
      setPopup({...popup, mostrando: false})
      setPopupChico({...popup, mostrando: true})
      return
    }
    const feats = e.features
    if (!feats || feats.length === 0 || feats[0].source !== 'capa-datos-movilidad') {
      return
    }
    setPopupChico({...popup, mostrando: false})
    setPopup({
      mostrando: true,
      latitude: e.lngLat[1],
      longitude: e.lngLat[0],
      titulo: pais === 'CL' ? feats[0].properties.NOM_COM : feats[0].properties.nam
    })
  }

  const actualizarPopupChico = e => {
    console.log(e)
    const feats = e.features
    if (!feats || feats.length === 0 || feats[0].source !== 'capa-datos-movilidad' || popup.mostrando) {
      setPopupChico({
        ...popupChico,
        mostrando: false
      })
      return
    }
    setPopupChico({
      mostrando: true,
      latitude: e.lngLat[1],
      longitude: e.lngLat[0],
      titulo: pais === 'CL' ? feats[0].properties.NOM_COM : feats[0].properties.nam
    })
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={cambioEnElViewport}
      mapStyle={style}
      className="Mapa"
      getCursor={() => cursor}
      onClick={mostrarPopup}
      onHover={actualizarPopupChico}
      onMouseLeave={() => setPopupChico({...popupChico, mostrando: false})}
    >
      <div style={{position: 'absolute', right: 16, top: 16}}>
        <NavigationControl showCompass={false} className="Mapa__controles_navegacion" />
      </div>
      <CodigoColor />
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
      {popupChico.mostrando &&
        <Popup
          latitude={popupChico.latitude}
          longitude={popupChico.longitude}
          closeButton={false}
          className="PopupChico"
        >
          <h1 className="PopupChico__titulo">{popupChico.titulo}</h1>
        </Popup>
      }
      <Source id="capa-datos-movilidad" type="geojson" data={datos}>
        <Layer {...obtenerDataLayer(dia)} />
      </Source>
    </ReactMapGL>
  )
}

export default Mapa