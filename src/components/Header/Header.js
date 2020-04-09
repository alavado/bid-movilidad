import React, { useState } from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft as iconoAnterior,
  faChevronRight as iconoSiguiente,
  faExpand, faCompress
} from '@fortawesome/free-solid-svg-icons'
import { fijarDia } from '../../redux/actions'
import logoBID from '../../assets/logo_bid.svg'
import { fechaInicio } from '../../config/fecha'

const pantallaCompletaHabilitada = () => {
  const { innerWidth, innerHeight, screen } = window
  return innerWidth === screen.width && innerHeight === screen.height
}

const Header = () => {

  const { dia } = useSelector(state => state.mapa)
  const dispatch = useDispatch()
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
        <img className="Header__logo_bid" src={logoBID} />
        <h1 className="Header__texto-titulo">Mapa de<br />distanciamiento social</h1>
      </div>
      <div className="Header__barra">
        <div className="Header__acciones">
          <button
            className="Header__accion"
            onClick={() => dispatch(fijarDia(dia - 1))}
            title="Día anterior"
          >
            <FontAwesomeIcon
              className="Header__icono_accion"
              icon={iconoAnterior}
            />
          </button>
          <button
            className="Header__accion"
            onClick={() => dispatch(fijarDia(dia + 1))}
            title="Día siguiente"
          >
            <FontAwesomeIcon
              className="Header__icono_accion"
              icon={iconoSiguiente}
            />
          </button>
        </div>
        <div className="Header__fecha">
          {moment(fechaInicio).add(dia - 1, 'days').format('dddd, D [de] MMMM [de] YYYY')}
        </div>
        <div className="Header__relleno" />
        <div className="Header__acciones_secundarias">
          <button className="Header__accion" onClick={fijarPantallaCompleta}>
            <FontAwesomeIcon icon={pantallaCompleta ? faCompress : faExpand} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
