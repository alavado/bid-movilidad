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

const Header = () => {

  const { dia } = useSelector(state => state.mapa)
  const dispatch = useDispatch()

  return (
    <div className="Header">
      <div className="Header__titulo">
        <h1 className="Header__texto-titulo">BID Movilidad</h1>
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
          {moment('2020-01-01').add(dia, 'days').format('dddd, D [de] MMMM [de] YYYY')}
        </div>
      </div>
    </div>
  )
}

export default Header
