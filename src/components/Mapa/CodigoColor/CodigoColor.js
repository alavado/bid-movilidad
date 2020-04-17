import React from 'react'
import './CodigoColor.css'

const CodigoColor = () => {
  return (
    <div className="CodigoColor">
      <div>Movilidad</div>
      <div className="CodigoColor__espectro" />
      <div className="CodigoColor__limites">
        <div>-75%</div>
        <div>-50%</div>
        <div>-25%</div>
        <div>0%</div>
      </div>
    </div>
  )
}

export default CodigoColor
