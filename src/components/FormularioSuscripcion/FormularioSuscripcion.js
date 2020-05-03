import React, { useState } from 'react'
import './FormularioSuscripcion.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

const FormularioSuscripcion = () => {

  return (
    <div className="FormularioSuscripcion">
      <div className="FormularioSuscripcion__contenedor">
        <h1>Prueba suscripcion</h1>
        <form name="suscripciones" data-netlify="true">
          <label>E-mail: <input type="email" name="email" /></label>
          <button type="submit">Suscribir</button>
        </form>
      </div>
    </div>
  )
}

export default FormularioSuscripcion
