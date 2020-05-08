import React, { useState } from 'react'
import './FormularioSuscripcion.css'
import { useSelector } from 'react-redux'
import useTextos from '../../hooks/useTextos'
import paises from '../../config/paises'

const FormularioSuscripcion = () => {

  const textos = useTextos()
  const { pais } = useSelector(state => state.mapa)

  return (
    <div className="FormularioSuscripcion">
      <div className="FormularioSuscripcion__contenedor">
        <form className="FormularioSuscripcion__formulario" name="suscripciones" method="post">
          <input type="hidden" name="form-name" value="suscripciones" />
          <p className="FormularioSuscripcion__titulo">{textos.explicacionSuscripcion}</p>
          <label className="FormularioSuscripcion__label">
            {textos.tipoOrganizacion}
            <select name="organizacion" className="FormularioSuscripcion__selector_organizacion">
              <option value="ong">{textos.ong}</option>
              <option value="organismo gubernamental">{textos.organismoGubernamental}</option>
              <option value="organismo internacional">{textos.organismoInternacional}</option>
              <option value="privado">{textos.organizacionPrivada}</option>
              <option value="universidad">{textos.universidad}</option>
            </select>
          </label>
          <label className="FormularioSuscripcion__label">
            E-mail
            <input className="FormularioSuscripcion__email" type="email" name="email" />
          </label>
          <p>{textos.recibirActualizacionesDe}</p>
          <label className="FormularioSuscripcion__radio">
            <input type="radio" name="pais" value={pais} />
            {paises.find(p => p.codigo === pais).nombre}
          </label>
          <label className="FormularioSuscripcion__radio">
            <input type="radio" name="pais" value="*" />
            {textos.todosLosPaises}
          </label>
          <button
            className="FormularioSuscripcion__boton_suscripcion"
            type="submit"
          >
            {textos.subscribe}
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormularioSuscripcion
