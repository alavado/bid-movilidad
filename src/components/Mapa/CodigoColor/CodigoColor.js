import React from 'react'
import './CodigoColor.css'
import { useSelector } from 'react-redux'

const CodigoColor = () => {

  const { textos } = useSelector(state => state.idioma)

  return (
    <div className="CodigoColor">
      <div className="CodigoColor__contenedor">
        <div>{textos.movilidad}</div>
        <div className="CodigoColor__espectro" />
        <div className="CodigoColor__limites">
          <div>-75%</div>
          <div>-50%</div>
          <div>-25%</div>
          <div>0%</div>
        </div>
      </div>
    </div>
  )
}

export default CodigoColor
