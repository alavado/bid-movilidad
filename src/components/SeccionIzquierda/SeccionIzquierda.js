import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'
import { useDispatch } from 'react-redux'
import { fijarPais, fijarDestino } from '../../redux/actions'
import logoIIEP from '../../assets/logo_iiep.png'
import logoCIAE from '../../assets/logo_ciae_uchile.png'
import logoVeraset from '../../assets/logo_veraset.png'
import configPaises from '../../config/paises'
import useTextos from '../../hooks/useTextos'
import { Link } from 'react-router-dom'

const SeccionIzquierda = () => {

  const dispatch = useDispatch()
  const paises = configPaises.sort((p1, p2) => p1.nombre > p2.nombre ? 1 : -1)
  const textos = useTextos()
  
  return (
    <aside className="SeccionIzquierda">
      <div className="SeccionIzquierda__contenedor_campo">
        <label htmlFor="selector-pais" className="SeccionIzquierda__label">{textos.seleccionePais}</label>
        <ReactFlagsSelect
          style={{ outline: 'none' }}
          id="selector-pais"
          className="SeccionIzquierda__selector-pais"
          defaultCountry="CO"
          countries={paises.map(({ codigo }) => codigo)}
          customLabels={paises.reduce((obj, p) => ({ ...obj, [p.codigo]: p.nombre }), {})}
          onSelect={codigo => {
            dispatch(fijarPais(codigo))
            dispatch(fijarDestino(codigo))
          }}
        />
      </div>
      <ul className="SeccionIzquierda__links">
        <a className="SeccionIzquierda__link" target="_blank" href={textos.linkMetodologia} rel="noopener noreferrer">
          {textos.metodologia}
        </a>
        <a className="SeccionIzquierda__link" target="_blank" href={textos.linkAcercaDe} rel="noopener noreferrer">
          {textos.acercaDe}
        </a>
        {/* <Link to="/suscripcion" className="SeccionIzquierda__link">
          Suscripción
        </Link> */}
        <a className="SeccionIzquierda__link SeccionIzquierda__link--contacto" href="mailto:research@iadb.org?Subject=Mapa%20de%20distanciamiento%20social" target="_top">
          {textos.contacto}<br /><span className="SeccionIzquierda__mail_contacto"></span>
        </a>
      </ul>
      <div className="SeccionIzquierda__inferior">
        <div className="SeccionIzquierda__stickers">
          <h2 className="SeccionIzquierda__stickers_titulo">{textos.conLaColaboracionDe}</h2>
          <div className="SeccionIzquierda__contenedor_stickers">
            <a href="http://ciae.uchile.cl/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--ciae" src={logoCIAE} alt="Logo CIAE" />
            </a>
            <a href="http://iiep-baires.econ.uba.ar/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--iiep" src={logoIIEP} alt="Logo IIEP" />
            </a>
            <a href="https://veraset.com/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--veraset" src={logoVeraset} alt="Logo Veraset" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SeccionIzquierda
