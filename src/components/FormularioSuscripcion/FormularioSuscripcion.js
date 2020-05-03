import React, { useState } from 'react'
import './FormularioSuscripcion.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

const FormularioSuscripcion = () => {

  return (
    <div className="FormularioSuscripcion">
      <div className="FormularioSuscripcion__contenedor">
        <h1>Prueba suscripcion</h1>
        <form name="contact" data-netlify="true">
        <input type="hidden" name="contact" value="contact" />
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default FormularioSuscripcion
