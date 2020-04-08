import React from 'react'
import './CodigoColor.css'

const CodigoColor = () => {
  return (
    <div className="CodigoColor">
      <div>Movilidad</div>
      <div className="CodigoColor__espectro" />
      <div className="CodigoColor__limites">
        <div>Baja</div>
        <div>Habitual</div>
      </div>
    </div>
  )
}

export default CodigoColor
