import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import logoBID from '../../assets/logo_bid.svg'
import ControlFechaSuperior from './ControlFechaSuperior'

const pantallaCompletaHabilitada = () => {
  const { innerWidth, innerHeight, screen } = window
  return innerWidth === screen.width && innerHeight === screen.height
}

const Header = () => {

  const [pantallaCompleta, setPantallaCompleta] = useState(false)

  const fijarPantallaCompleta = () => {
    setPantallaCompleta(prev => !pantallaCompletaHabilitada())
    if (pantallaCompletaHabilitada()) {
      document.exitFullscreen()
    }
    else {
      document.getElementById("root").requestFullscreen()
    }
  }

  return (
    <header className="Header">
      <div className="Header__titulo">
        <img className="Header__logo_bid" src={logoBID} alt="Logo BID" />
        <h1 className="Header__texto-titulo">Mapa de<br />distanciamiento social</h1>
      </div>
      <div className="Header__barra">
        <div className="Header__titulo_landscape">
          Mapa de Movilidad de las Personas
          <FontAwesomeIcon className="Header__icono_info" icon={faQuestionCircle} />
        </div>
        <div className="Header__relleno" />
        <ControlFechaSuperior />
        <div className="Header__relleno_doble" />
        <div className="Header__acciones_secundarias">
          <button
            title={pantallaCompleta ? 'Salir de pantalla completa' : 'Pantalla completa'}
            className="Header__accion"
            onClick={fijarPantallaCompleta}
          >
            <FontAwesomeIcon icon={pantallaCompleta ? faCompress : faExpand} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
