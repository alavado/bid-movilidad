import React, { useState, useMemo } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import { dataLayer } from './mapStyle.js'
import geoJSONComunasChile from '../../geojsons/chile/comunas.json'

const mapboxToken = 'pk.eyJ1IjoiYWxlNjE1IiwiYSI6ImNqbDZ5eGt3ZDAxcGszdm83Z3piZ3YwdTcifQ.0dSxbx5BR0aoOsarUYmArQ'

const Mapa = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: -33.447487,
    longitude: -70.673676,
    zoom: 8
  })

  const datos = useMemo(() => ({
    ...geoJSONComunasChile,
    features: geoJSONComunasChile.features.map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        valor: Math.random()
      }
    }))
  }), [])

  const cambioEnElViewport = vp => {
    setViewport({
      ...vp,
      width: '100%',
      height: '100vh'
    })
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={cambioEnElViewport}
      mapboxApiAccessToken={mapboxToken}
    >
      <Source id="test" type="geojson" data={datos}>
        <Layer {...dataLayer} />
      </Source>
    </ReactMapGL>
  )
}

export default Mapa