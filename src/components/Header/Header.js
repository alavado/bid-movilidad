import React from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft as iconoAnterior,
  faChevronRight as iconoSiguiente
} from '@fortawesome/free-solid-svg-icons'
import { fijarDia } from '../../redux/actions'
import logoBID from '../../assets/logo_bid.svg'

const Header = () => {

  const { dia } = useSelector(state => state.mapa)
  const dispatch = useDispatch()

  return (
    <header className="Header">
      <div className="Header__titulo">
        <img className="Header__logo_bid" src={logoBID} />
        <h1 className="Header__texto-titulo">Movilidad<br />COVID-19</h1>
      </div>
      <div className="Header__barra">
        <div className="Header__acciones">
          <FontAwesomeIcon
            title="Día anterior"
            className="Header__accion"
            icon={iconoAnterior}
            onClick={() => dispatch(fijarDia(dia - 1))}
          />
          <FontAwesomeIcon
            title="Día siguiente"
            className="Header__accion"
            icon={iconoSiguiente}
            onClick={() => dispatch(fijarDia(dia + 1))}
          />
        </div>
        <div className="Header__fecha">
          {moment('2020-03-03').add(dia - 1, 'days').format('dddd, D [de] MMMM [de] YYYY')}
        </div>
      </div>
    </header>
  )
}

export default Header
