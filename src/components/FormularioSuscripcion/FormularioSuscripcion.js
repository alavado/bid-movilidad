import React, { useState } from 'react'
import './FormularioSuscripcion.css'
import { useSelector } from 'react-redux'
import moment from 'moment'
import useTextos from '../../hooks/useTextos'

const FormularioSuscripcion = () => {

  const textos = useTextos()

  return (
    <div className="FormularioSuscripcion">
      <div className="FormularioSuscripcion__contenedor">
        <h1>Prueba suscripcion</h1>
        <form className="FormularioSuscripcion__formulario" name="suscripciones" method="post">
          <p>Quiero recibir notificaciones sobre:</p>
          <label><input type="radio" name="pais" />México</label>
          <label><input type="radio" name="pais" />Todos los países</label>
          <label>Email <input type="email" name="email" /></label>
          <button type="submit">{textos.suscripcion}</button>
        </form>
      </div>
    </div>
  )
}

export default FormularioSuscripcion
