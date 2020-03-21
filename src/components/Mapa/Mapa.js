import React, { useState } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import { dataLayer } from './map-style.js';
import data from '../../geojsons/chile/comunas.json'

const Mapa = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: -33.447487,
    longitude: -70.673676,
    zoom: 8
  })

  const cambioEnElViewport = vp => {
    setViewport({
      ...vp,
      width: '100%',
      height: '100vh'
    })
  }

  const construirData = () => {
    const datosFormateados = {
      type: 'FeatureCollection',
      geometries: data.objects.comunas.geometries
    }
    console.log(data)
    return data
  }
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={cambioEnElViewport}
      mapboxApiAccessToken="pk.eyJ1IjoiYWxlNjE1IiwiYSI6ImNqbDZ5eGt3ZDAxcGszdm83Z3piZ3YwdTcifQ.0dSxbx5BR0aoOsarUYmArQ"
    >
      {data &&
        <Source id="test" type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
      }
    </ReactMapGL>
  )
}

export default Mapa