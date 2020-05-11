import React, { useState, useEffect, useRef } from 'react'
import './FormularioSuscripcion.css'
import { useSelector } from 'react-redux'
import useTextos from '../../hooks/useTextos'
import paises from '../../config/paises'
import { useHistory } from 'react-router-dom'
import { faTimes as iconoCerrar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormularioSuscripcion = () => {

  const textos = useTextos()
  const { pais } = useSelector(state => state.mapa)
  const [variables, setVariables] = useState({
    organizacion: 'ong',
    email: '',
    paises: ''
  })
  const otroRef = useRef()
  const history = useHistory()
  console.log({variables})

  useEffect(() => {
    if (variables.organizacion === 'otro') {
      otroRef.current.focus()
    }
  }, [variables])

  return (
    <div className="FormularioSuscripcion">
      <div className="FormularioSuscripcion__contenedor">
        <button
          onClick={() => history.push('/')}
          className="FormularioSuscripcion__boton_cerrar"
        >
          <FontAwesomeIcon icon={iconoCerrar} />
        </button>
        <form className="FormularioSuscripcion__formulario" name="suscripciones" method="post">
          <input type="hidden" name="form-name" value="suscripciones" />
          <p className="FormularioSuscripcion__titulo">{textos.explicacionSuscripcion}</p>
          <label className="FormularioSuscripcion__label">
            {textos.tipoOrganizacion}
            <select
              name="organizacion"
              className="FormularioSuscripcion__selector_organizacion"
              value={variables.organizacion}
              onChange={e => setVariables({ ...variables, organizacion: e.target.value })}
            >
              <option value="ong">{textos.ong}</option>
              <option value="organismo gubernamental">{textos.organismoGubernamental}</option>
              <option value="organismo internacional">{textos.organismoInternacional}</option>
              <option value="privado">{textos.organizacionPrivada}</option>
              <option value="universidad">{textos.universidad}</option>
              <option value="otro">{textos.otro}</option>
            </select>
          </label>
          {variables.organizacion === "otro" && 
            <label className="FormularioSuscripcion__label">
              <input
                ref={otroRef}
                type="text"
                name="otra_organizacion"
                className="FormularioSuscripcion__selector_organizacion"
                onChange={e => setVariables({ ...variables, otro: e.target.value })}
              />
            </label>
          }
          <label
            className="FormularioSuscripcion__label"
            value={variables.email}
            onChange={e => setVariables({ ...variables, email: e.target.value })}
          >
            E-mail
            <input className="FormularioSuscripcion__email" type="email" name="email" />
          </label>
          <p>{textos.recibirActualizacionesDe}</p>
          <label className="FormularioSuscripcion__radio">
            <input
              type="radio"
              name="pais"
              value={pais}
              checked={variables.paises === pais}
              onChange={e => {
                if (e.target.checked) {
                  setVariables({ ...variables, paises: pais })
                }
              }}
            />
            {paises.find(p => p.codigo === pais).nombre}
          </label>
          <label className="FormularioSuscripcion__radio">
            <input
              type="radio"
              name="pais"
              value="Todos"
              checked={variables.paises === 'Todos'}
              onChange={e => {
                if (e.target.checked) {
                  setVariables({ ...variables, paises: 'Todos' })
                }
              }}
            />
            {textos.todosLosPaises}
          </label>
          <button
            className="FormularioSuscripcion__boton_suscripcion"
            type="submit"
            disabled={variables.email === '' || variables.paises === ''}
          >
            {textos.subscribe}
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormularioSuscripcion
