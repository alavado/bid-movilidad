import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logoBID from '../../assets/logo_bid.svg'
import ControlFechaSuperior from './ControlFechaSuperior'
import { useDispatch, useSelector } from 'react-redux'
import { abrirMenu, cerrarMenu } from '../../redux/actions'
import useTextos from '../../hooks/useTextos'
import { Link } from 'react-router-dom'

const pantallaCompletaHabilitada = () => {
  const { innerWidth, innerHeight, screen } = window
  return innerWidth === screen.width && innerHeight === screen.height
}

const Header = () => {

  const [pantallaCompleta, setPantallaCompleta] = useState(false)
  const { activo: menuActivo } = useSelector(state => state.menu)
  const textos = useTextos()
  const dispatch = useDispatch()

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
        <h1 className="Header__texto_titulo">{textos.titulo}</h1>
      </div>
      <div className="Header__barra">
        <div className="Header__titulo_landscape">
          <h1 className="Header__texto_titulo_landscape">{textos.titulo}</h1>
          {menuActivo ?
            <FontAwesomeIcon onClick={() => dispatch(cerrarMenu())} className="Header__icono_info" icon={faTimes} /> :
            <FontAwesomeIcon onClick={() => dispatch(abrirMenu())} className="Header__icono_info" icon={faBars} />
          }
        </div>
        <div className="Header__relleno" />
        <ControlFechaSuperior />
        <div className="Header__relleno_doble" />
        <div className="Header__acciones_secundarias">
          {/* <button
            title={pantallaCompleta ? textos.salirDePantallaCompleta : textos.pantallaCompleta}
            className="Header__accion"
            onClick={fijarPantallaCompleta}
          >
            <FontAwesomeIcon icon={pantallaCompleta ? faCompress : faExpand} />
          </button> */}
          <Link to="/suscripcion">
            <button className="Header__boton_suscripcion">
              {textos.suscripcion}
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
