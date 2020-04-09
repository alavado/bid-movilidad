import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fijarDia } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment/min/moment-with-locales'
import {
  faChevronLeft as iconoAnterior,
  faChevronRight as iconoSiguiente
} from '@fortawesome/free-solid-svg-icons'
import './SelectorFecha.css'
import './range.css'
import { fechaInicio } from '../../config/fecha'

const SelectorFecha = () => {

  const { dia } = useSelector(state => state.mapa)
  const dispatch = useDispatch()

  return (
    <div className="SelectorFecha">
      <div className="SelectorFecha__fecha_cercana">
        {moment(fechaInicio).add(dia - 1, 'days').format('dddd, D [de] MMMM [de] YYYY')}
      </div>
      <div className="SelectorFecha__acciones">
        <button
          className="SelectorFecha__accion"
          onClick={() => dispatch(fijarDia(dia - 1))}
          title="Día anterior"
        >
          <FontAwesomeIcon
            className="SelectorFecha__icono_accion"
            icon={iconoAnterior}
          />
        </button>
        <button
          className="SelectorFecha__accion"
          onClick={() => dispatch(fijarDia(dia + 1))}
          title="Día siguiente"
        >
          <FontAwesomeIcon
            className="SelectorFecha__icono_accion"
            icon={iconoSiguiente}
          />
        </button>
      </div>
      <input
        title="Arrastra para moverte en el tiempo"
        type="range"
        step="1"
        min="1"
        max="23"
        value={dia}
        onChange={e => dispatch(fijarDia(parseInt(e.target.value)))}
      />
    </div>
  )
}

export default SelectorFecha
