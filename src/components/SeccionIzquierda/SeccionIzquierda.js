import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'
import { useDispatch } from 'react-redux'
import { fijarPais, fijarDestino, abrirBandeja } from '../../redux/actions'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import logoIIEP from '../../assets/logo_iiep.png'

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
      <div className="SeccionIzquierda__inferior">
        <ul className="SeccionIzquierda__links">
          <Link className="SeccionIzquierda__link" activeClassName="SeccionIzquierda__link--activo" to="/methodology">Metodología</Link>
          <Link className="SeccionIzquierda__link" activeClassName="SeccionIzquierda__link--activo" to="/about">Equipo</Link>
          <Link className="SeccionIzquierda__link" activeClassName="SeccionIzquierda__link--activo" to="/contact">Contacto</Link>
          <a className="SeccionIzquierda__link" target="_blank" href="https://google.com">
            Blog <FontAwesomeIcon size="sm" className="SeccionIzquierda__icono_link_externo" icon={faExternalLinkAlt} />
          </a>
        </ul>
        <div className="SeccionIzquierda__stickers">
          <img className="SeccionIzquierda__sticker" src={logoIIEP} alt="Logo IIEP" />
        </div>
      </div>
    </aside>
  )
}

export default SeccionIzquierda
