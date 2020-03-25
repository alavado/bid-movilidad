import React, { useState, useMemo } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import { obtenerDataLayer } from './mapStyle.js'
import geoJSONComunasChile from '../../geojsons/chile/comunas.json'
import geoJSONDepartamentosArgentina from '../../geojsons/argentina/departamentos.json'
import geoJSONMunicipiosBrasil from '../../geojsons/brasil/municipios.json'
import { useSelector } from 'react-redux'
import style from './style.json'

const Mapa = () => {

  const { dia, pais } = useSelector(state => state.mapa)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 'calc(100vh - 88px)',
    latitude: -44.24312271012774,
    longitude: -70.09995738380601,
    zoom: 4,
    bearing: 57.09354525600582,
    pitch: 45.608390459566344,
    altitude: 1.5
  })

  const obtenerFeatures = pais => {
    switch(pais) {
      case 'AR':
        return geoJSONDepartamentosArgentina.features
      case 'BR':
        return geoJSONMunicipiosBrasil.features
      default:
        return geoJSONComunasChile.features
    }
  }

  const datos = useMemo(() => ({
    type: "FeatureCollection",
    features: obtenerFeatures(pais).map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        ...Array.from(Array(180).keys()).reduce((prev, n) => ({...prev, [`valor${n}`]: Math.random() }), {})
      }
    }))
  }), [pais])

  const cambioEnElViewport = vp => {
    console.log(vp)
    setViewport({
      ...vp,
      width: '100%',
      height: 'calc(100vh - 88px)'
    })
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={cambioEnElViewport}
      mapStyle={style}
    >
      <Source id="test" type="geojson" data={datos}>
        <Layer {...obtenerDataLayer(dia)} />
      </Source>
    </ReactMapGL>
  )
}

export default Mapa