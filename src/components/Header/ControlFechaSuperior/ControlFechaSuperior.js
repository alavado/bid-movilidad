import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStepBackward as iconoAnterior,
  faStepForward as iconoSiguiente
} from '@fortawesome/free-solid-svg-icons'
import { fijarDia, playFecha } from '../../../redux/actions'
import { fechaInicio } from '../../../config/fecha'
import './ControlFechaSuperior.css'

const ControlFechaSuperior = () => {
  
  const dispatch = useDispatch()
  const { dia: diaRedux, playing } = useSelector(state => state.mapa)
  const [dia, setDia] = useState(diaRedux)
  const [movimientoDia, setMovimientoDia] = useState(0)
  const [vecesFechaAnimada, setVecesFechaAnimada] = useState(0)

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
    <div className="ControlFechaSuperior">
      <button
        className="ControlFechaSuperior__accion"
        onClick={() => {
          dispatch(playFecha(false))
          dispatch(fijarDia(dia - 1))
        }}
        title="Día anterior"
      >
        <FontAwesomeIcon
          className="ControlFechaSuperior__icono_accion"
          icon={iconoAnterior}
        />
      </button>
      <div
        className={`ControlFechaSuperior__fecha${` ControlFechaSuperior__fecha--${movimientoDia > 0 ? 'avanza' : 'retrocede'}${vecesFechaAnimada % 2 + 1}`}`}
      >
        {moment(fechaInicio).add(dia - 1, 'days').format('dddd, D [de] MMMM [de] YYYY')}
      </div>
      <button
        className="ControlFechaSuperior__accion"
        onClick={() => {
          dispatch(fijarDia(dia + 1))
          dispatch(playFecha(false))
        }}
        title="Día siguiente"
      >
        <FontAwesomeIcon
          className="ControlFechaSuperior__icono_accion"
          icon={iconoSiguiente}
        />
      </button>
    </div>
  )
}

export default ControlFechaSuperior
