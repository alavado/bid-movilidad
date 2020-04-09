import React, { useState, useEffect } from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft as iconoAnterior,
  faChevronRight as iconoSiguiente,
  faExpand, faCompress
} from '@fortawesome/free-solid-svg-icons'
import { fijarDia } from '../../redux/actions'
import logoBID from '../../assets/logo_bid.svg'
import { fechaInicio } from '../../config/fecha'
import ControlFechaSuperior from './ControlFechaSuperior'

const pantallaCompletaHabilitada = () => {
  const { innerWidth, innerHeight, screen } = window
  return innerWidth === screen.width && innerHeight === screen.height
}

const Header = () => {

  const { dia: diaRedux } = useSelector(state => state.mapa)
  const [pantallaCompleta, setPantallaCompleta] = useState(false)
  const [dia, setDia] = useState(diaRedux)
  const [movimientoDia, setMovimientoDia] = useState(0)
  const [vecesFechaAnimada, setVecesFechaAnimada] = useState(0)

  const fijarPantallaCompleta = () => {
    setPantallaCompleta(prev => !pantallaCompletaHabilitada())
    if (pantallaCompletaHabilitada()) {
      document.exitFullscreen()
    }
    else {
      document.getElementById("root").requestFullscreen()
    }
  }

  useEffect(() => {
    setDia(prev => {
      if (prev !== diaRedux) {
        setMovimientoDia(prev < diaRedux ? 1 : -1)
        setVecesFechaAnimada(vecesFechaAnimada + 1)
      }
      return diaRedux
    })
  }, [diaRedux])

  return (
    <header className="Header">
      <div className="Header__titulo">
        <img className="Header__logo_bid" src={logoBID} />
        <h1 className="Header__texto-titulo">Mapa de<br />distanciamiento social</h1>
      </div>
      <div className="Header__barra">
        <div className="Header__titulo_landscape">
          Mapa de Distanciamiento Social
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
