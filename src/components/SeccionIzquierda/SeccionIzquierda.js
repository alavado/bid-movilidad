import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'
import { useDispatch } from 'react-redux'
import { fijarPais, fijarDestino, abrirBandeja } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const SeccionIzquierda = () => {

  const dispatch = useDispatch()

  return (
    <aside className="SeccionIzquierda">
      <div className="SeccionIzquierda__contenedor_campo">
        <label htmlFor="selector-pais" className="SeccionIzquierda__label">País seleccionado</label>
        <ReactFlagsSelect
          style={{ outline: 'none' }}
          id="selector-pais"
          className="SeccionIzquierda__selector-pais"
          defaultCountry="CL"
          countries={['CL', 'EC']}
          onSelect={codigo => {
            dispatch(fijarPais(codigo))
            dispatch(fijarDestino(codigo))
          }}
        />
      </div>
      <ul className="SeccionIzquierda__links">
        <Link className="SeccionIzquierda__link" to="/methodology">Metodología</Link>
        <Link className="SeccionIzquierda__link" to="/about">Equipo</Link>
        <Link className="SeccionIzquierda__link" to="/contact">Contacto</Link>
        <a className="SeccionIzquierda__link" href="https://google.com">
          Blog <FontAwesomeIcon size="sm" className="SeccionIzquierda__icono_link_externo" icon={faExternalLinkAlt} />
        </a>
      </ul>
    </aside>
  )
}

export default SeccionIzquierda
