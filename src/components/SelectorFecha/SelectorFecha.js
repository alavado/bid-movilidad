import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fijarDia, playFecha } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment/min/moment-with-locales'
import { faPlay as iconoPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause as iconoPause } from '@fortawesome/free-solid-svg-icons'
import './SelectorFecha.css'
import './range.css'
import { fechaInicio, numeroDias } from '../../config/fecha'

const SelectorFecha = () => {

  const { playing, dia } = useSelector(state => state.mapa)
  const dispatch = useDispatch()

  useEffect(() => {
    let timeoutPlay
    if (playing) {
      timeoutPlay = setTimeout(() => dispatch(fijarDia(dia + 1)), 2000)
    }
    return () => {
      if (timeoutPlay) {
        clearTimeout(timeoutPlay)
      }
    }
  }, [dia, playing])

  return (
    <div className="SelectorFecha">
      <div className="SelectorFecha__fecha_cercana">
        {moment(fechaInicio).add(dia - 1, 'days').format('dddd, D [de] MMMM [de] YYYY')}
      </div>
      <div className="SelectorFecha__contenedor_inferior">
        <div className="SelectorFecha__acciones">
          <button
            className="SelectorFecha__accion"
            onClick={() => dispatch(playFecha(!playing))}
            title={playing ? 'Detener avance automático' : 'Avance automático'}
          >
            <FontAwesomeIcon
              className="SelectorFecha__icono_accion"
              icon={playing ? iconoPause : iconoPlay}
            />
          </button>
        </div>
        <input
          title="Arrastra para moverte en el tiempo"
          type="range"
          step="1"
          min="2"
          max={numeroDias}
          value={dia}
          onChange={e => {
            dispatch(playFecha(false))
            dispatch(fijarDia(parseInt(e.target.value)))
          }}
        />
      </div>
    </div>
  )
}

export default SelectorFecha
