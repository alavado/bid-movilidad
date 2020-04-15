import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'
import { useDispatch } from 'react-redux'
import { fijarPais, fijarDestino } from '../../redux/actions'
import { NavLink as Link } from 'react-router-dom'
import logoIIEP from '../../assets/logo_iiep.png'
import logoCIAE from '../../assets/logo_ciae_nuevo.png'
import configPaises from '../../config/paises'

const SeccionIzquierda = () => {

  const dispatch = useDispatch()

  return (
    <aside className="SeccionIzquierda">
      <div className="SeccionIzquierda__contenedor_campo">
        <label htmlFor="selector-pais" className="SeccionIzquierda__label">País</label>
        <ReactFlagsSelect
          style={{ outline: 'none' }}
          id="selector-pais"
          className="SeccionIzquierda__selector-pais"
          defaultCountry="CL"
          countries={configPaises.map(({ codigo }) => codigo)}
          customLabels={configPaises.reduce((obj, p) => ({ ...obj, [p.codigo]: p.nombre }), {})}
          onSelect={codigo => {
            dispatch(fijarPais(codigo))
            dispatch(fijarDestino(codigo))
          }}
        />
      </div>
      <ul className="SeccionIzquierda__links">
        <Link className="SeccionIzquierda__link" activeClassName="SeccionIzquierda__link--activo" to="/methodology">Metodología</Link>
        <Link className="SeccionIzquierda__link" activeClassName="SeccionIzquierda__link--activo" to="/about">Acerca de</Link>
        <Link className="SeccionIzquierda__link" activeClassName="SeccionIzquierda__link--activo" to="/contact">Contacto</Link>
        {/* <a className="SeccionIzquierda__link" target="_blank" href="https://google.com" rel="noopener noreferrer">
          Blog <FontAwesomeIcon size="sm" className="SeccionIzquierda__icono_link_externo" icon={faExternalLinkAlt} />
        </a> */}
      </ul>
      <div className="SeccionIzquierda__inferior">
        <div className="SeccionIzquierda__stickers">
          <h2 className="SeccionIzquierda__stickers_titulo">Con la colaboración de</h2>
          <div className="SeccionIzquierda__contenedor_stickers">
            <a href="http://ciae.uchile.cl/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--ciae" src={logoCIAE} alt="Logo CIAE" />
            </a>
            <a href="http://iiep-baires.econ.uba.ar/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--iiep" src={logoIIEP} alt="Logo IIEP" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SeccionIzquierda
