import React, { useState, useMemo } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import { obtenerDataLayer } from './mapStyle.js'
import geoJSONComunasChile from '../../geojsons/chile/comunas.json'
import geoJSONDepartamentosArgentina from '../../geojsons/argentina/departamentos.json'
import geoJSONMunicipiosBrasil from '../../geojsons/brasil/municipios.json'
import { useSelector } from 'react-redux'
import style from './style.json'

const mapboxToken = 'pk.eyJ1IjoiYWxlNjE1IiwiYSI6ImNqbDZ5eGt3ZDAxcGszdm83Z3piZ3YwdTcifQ.0dSxbx5BR0aoOsarUYmArQ'

const Mapa = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 'calc(100vh - 88px)',
    latitude: -33.447487,
    longitude: -70.673676,
    zoom: 8
  })

  const datos = useMemo(() => ({
    type: "FeatureCollection",
    features: [
      ...geoJSONComunasChile.features,
      ...geoJSONDepartamentosArgentina.features,
      ...geoJSONMunicipiosBrasil.features,
    ].map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        valor1: Math.random(),
        valor2: Math.random()
      }
    }))
  }), [])

  const { dia } = useSelector(state => state.mapa)

  const cambioEnElViewport = vp => {
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
      // mapboxApiAccessToken={mapboxToken}
    >
      <Source id="test" type="geojson" data={datos}>
        <Layer {...obtenerDataLayer(dia)} />
      </Source>
    </ReactMapGL>
  )
}

export default Mapa