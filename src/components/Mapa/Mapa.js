import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

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

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={cambioEnElViewport}
      mapboxApiAccessToken="pk.eyJ1IjoiYWxlNjE1IiwiYSI6ImNqbDZ5eGt3ZDAxcGszdm83Z3piZ3YwdTcifQ.0dSxbx5BR0aoOsarUYmArQ"
    />
  )
}

export default Mapa