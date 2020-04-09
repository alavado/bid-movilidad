import React, { useState, useMemo, useEffect } from 'react'
import ReactMapGL, { Source, Layer, NavigationControl, Popup, FlyToInterpolator } from 'react-map-gl'
import { useSelector, useDispatch } from 'react-redux'
import style from './style.json'
import './Mapa.css'
import { obtenerFeaturesPais } from './helpers.js'
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

  const [cursor, setCursor] = useState('default')

  const datos = useMemo(() => ({
    type: 'FeatureCollection',
    features: obtenerFeaturesPais(pais)
  }), [pais])

  useEffect(() => {
    if (destino) {
      setViewport(v => ({
        ...v,
        zoom: Number(destino.zoom),
        latitude: Number(destino.lat),
        longitude: Number(destino.lng),
        transitionInterpolator: new FlyToInterpolator({ speed: 1.5 }),
        transitionDuration: 'auto'
      }))
      dispatch(fijarDestino(null))
    }
  }, [destino])

  const cambioEnElViewport = vp => {
    setViewport({
      ...vp,
      width: '100%',
      height: 'calc(100vh - 5.5em)',
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
      titulo: pais === 'CL' ? feats[0].properties.NOM_REG : (pais === 'AR' ?  feats[0].properties.nam : feats[0].properties.dpa_despro)
    })
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
      titulo: pais === 'CL' ? feats[0].properties.NOM_REG : (pais === 'AR' ?  feats[0].properties.nam : feats[0].properties.dpa_despro)
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
              property: `v${dia + 2}`,
              stops: [
                [.15, '#abdda4'],
                [.3, '#e6f598'],
                [.45, '#ffffbf'],
                [.6, '#fee08b'],
                [.75, '#fdae61'],
                [.9, '#f46d43'],
                [1.05, '#d53e4f']
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