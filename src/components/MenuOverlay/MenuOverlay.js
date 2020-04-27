import React from 'react'
import logoIIEP from '../../assets/logo_iiep.png'
import logoCIAE from '../../assets/logo_ciae_uchile.png'
import logoVeraset from '../../assets/logo_veraset.png'
import './MenuOverlay.css'
import { useSelector } from 'react-redux'
import useTextos from '../../hooks/useTextos'

const MenuOverlay = () => {

  const { activo: menuActivo } = useSelector(state => state.menu)
  const textos = useTextos()

  return (
    <div className={`MenuOverlay${menuActivo ? ' MenuOverlay--activo' : ''}`}>
      <ul className="MenuOverlay__links">
        <a className="MenuOverlay__link" target="_blank" href="http://www.iadb.org/document.cfm?id=EZSHARE-1993837609-142" rel="noopener noreferrer">
          {textos.metodologia}
        </a>
        <a className="MenuOverlay__link" target="_blank" href="http://www.iadb.org/document.cfm?id=EZSHARE-1993837609-143" rel="noopener noreferrer">
          {textos.acercaDe}
        </a>
        <a className="MenuOverlay__link MenuOverlay__link--contacto" href="mailto:research@iadb.org?Subject=Mapa%20de%20distanciamiento%20social" target="_top">
          {textos.contacto}
        </a>
        <a className="MenuOverlay__link" href={textos.linkBlog} target="_top">
          {textos.blog}
        </a>
        <a className="MenuOverlay__link" href={textos.linkDashboard} target="_top">
          {textos.dashboard}
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
            <a href="https://veraset.com/" target="_blank" rel="noopener noreferrer">
            <img className="MenuOverlay__logo MenuOverlay__logo--veraset" src={logoVeraset} alt="Logo Veraset" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MenuOverlay
