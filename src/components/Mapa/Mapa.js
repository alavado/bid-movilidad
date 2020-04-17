import React, { useState, useMemo, useEffect } from 'react'
import ReactMapGL, { Source, Layer, NavigationControl, Popup, FlyToInterpolator } from 'react-map-gl'
import { useSelector, useDispatch } from 'react-redux'
import style from './style.json'
import './Mapa.css'
import { obtenerFeaturesPais, obtenerClaveNombreRegion } from './helpers.js'
import CodigoColor from './CodigoColor'
import GraficoComuna from '../GraficoComuna'
import { fijarDestino, fijarDatosRegion } from '../../redux/actions.js'

const Mapa = () => {

  const { dia, pais, destino } = useSelector(state => state.mapa)
  const dispatch = useDispatch()

  const [popupChico, setPopupChico] = useState({
    mostrando: false,
    latitude: 0,
    longitude: 0,
    titulo: ''
  })

  const [popup, setPopup] = useState({
    mostrando: false,
    latitude: 0,
    longitude: 0,
    titulo: ''
  })

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 'calc(100vh - 5.5em)',
    latitude: -44.24,
    longitude: -70.01,
    zoom: 4,
    bearing: 57.09,
    pitch: 45.61,
    altitude: 1.5
  })

  const [cursor] = useState('default')

  const datos = useMemo(() => ({
    type: 'FeatureCollection',
    features: obtenerFeaturesPais(pais)
  }), [pais])

  useEffect(() => setPopup({ ...popup, mostrando: false }), [pais])

  useEffect(() => {
    if (destino) {
      setViewport(v => ({
        ...v,
        zoom: Number(destino.zoom),
        latitude: Number(destino.latitude),
        longitude: Number(destino.longitude),
        transitionInterpolator: new FlyToInterpolator({ speed: 1.5 }),
        transitionDuration: 'auto'
      }))
      dispatch(fijarDestino(null))
    }
  }, [dispatch, destino])

  const cambioEnElViewport = vp => {
    setViewport({
      ...vp,
      width: '100%',
      height: 'calc(100vh - 5.5em)',
    })
  }

  const mostrarPopup = e => {
    if (window.location.href.includes('3000')) console.log({viewport})
    if (popup.mostrando) {
      setPopup({...popup, mostrando: false})
      actualizarPopupChico(e)
      return
    }
    const feats = e.features
    if (!feats || feats.length === 0 || feats[0].source !== 'capa-datos-movilidad') {
      return
    }
    console.log(feats[0])
    setPopupChico({...popupChico, mostrando: false})
    setPopup({
      mostrando: true,
      latitude: e.lngLat[1],
      longitude: e.lngLat[0],
      titulo: feats[0].properties[obtenerClaveNombreRegion(pais)]
    })
    const feature = e.features.find(f => f.source === 'capa-datos-movilidad')
    if (feature) {
      dispatch(fijarDatosRegion(feature.properties))
    }
  }

  const actualizarPopupChico = e => {
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
      titulo: feats[0].properties[obtenerClaveNombreRegion(pais)]
    })
    const feature = e.features.find(f => f.source === 'capa-datos-movilidad')
    if (feature) {
      dispatch(fijarDatosRegion(feature.properties))
    }
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
        <Layer
          id="data"
          type="fill"
          paint={{
            'fill-color': {
              property: `v${dia}`,
              stops: [
                [-1010, '#B0BEC5'], // sin datos
                [-72, '#abdda4'],
                [-60, '#e6f598'],
                [-48, '#ffffbf'],
                [-36, '#fee08b'],
                [-24, '#fdae61'],
                [-12, '#f46d43'],
                [0, '#d53e4f']
              ]
            },
            'fill-opacity': .5,
            'fill-color-transition': {
              'duration': 300,
              'delay': 0
            }
          }}/>
      </Source>
    </ReactMapGL>
  )
}

export default Mapa