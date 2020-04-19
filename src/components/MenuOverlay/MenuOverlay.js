import React from 'react'
import logoIIEP from '../../assets/logo_iiep.png'
import logoCIAE from '../../assets/logo_ciae_nuevo.png'
import './MenuOverlay.css'
import { useSelector } from 'react-redux'

const MenuOverlay = () => {

  const { activo: menuActivo } = useSelector(state => state.menu)

  return (
    <div className={`MenuOverlay${menuActivo ? ' MenuOverlay--activo' : ''}`}>
      <ul className="MenuOverlay__links">
        <a className="MenuOverlay__link" target="_blank" href="http://www.iadb.org/document.cfm?id=EZSHARE-1993837609-142" rel="noopener noreferrer">
          Metodología
        </a>
        <a className="MenuOverlay__link" target="_blank" href="http://www.iadb.org/document.cfm?id=EZSHARE-1993837609-143" rel="noopener noreferrer">
          Acerca de 
        </a>
        <a className="MenuOverlay__link MenuOverlay__link--contacto" href="mailto:research@iadb.org?Subject=Mapa%20de%20distanciamiento%20social" target="_top">
          Contacto<br /><span className="MenuOverlay__mail_contacto">research@iadb.org</span>
        </a>
      </ul>
      <div className="MenuOverlay__logos">
        <h2 className="MenuOverlay__logos_titulo">Con la colaboración de</h2>
        <div className="MenuOverlay__contenedor_logos">
          <a href="http://ciae.uchile.cl/" target="_blank" rel="noopener noreferrer">
            <img className="MenuOverlay__logo MenuOverlay__logo--ciae" src={logoCIAE} alt="Logo CIAE" />
          </a>
          <a href="http://iiep-baires.econ.uba.ar/" target="_blank" rel="noopener noreferrer">
            <img className="MenuOverlay__logo MenuOverlay__logo--iiep" src={logoIIEP} alt="Logo IIEP" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MenuOverlay
