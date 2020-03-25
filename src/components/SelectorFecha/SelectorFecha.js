import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fijarDia } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft as iconoAnterior,
  faChevronRight as iconoSiguiente
} from '@fortawesome/free-solid-svg-icons'
import './SelectorFecha.css'
import './range.css'

const SelectorFecha = () => {

  const { dia } = useSelector(state => state.mapa)
  const dispatch = useDispatch()

  return (
    <div className="SelectorFecha">
      <div className="SelectorFecha__acciones">
        <FontAwesomeIcon
          title="Día anterior"
          className="SelectorFecha__accion"
          icon={iconoAnterior}
          onClick={() => dispatch(fijarDia(dia - 1))}
        />
        <FontAwesomeIcon
          title="Día siguiente"
          className="SelectorFecha__accion"
          icon={iconoSiguiente}
          onClick={() => dispatch(fijarDia(dia + 1))}
        />
      </div>
      <input
        type="range"
        step="1"
        min="0"
        max="180"
        value={dia}
        onChange={e => dispatch(fijarDia(parseInt(e.target.value)))}
      />
    </div>
  )
}

export default SelectorFecha
