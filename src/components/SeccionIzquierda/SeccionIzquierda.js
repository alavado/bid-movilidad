import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'
import { useDispatch } from 'react-redux'
import { fijarPais, fijarDestino, abrirBandeja } from '../../redux/actions'

const SeccionIzquierda = () => {

  const dispatch = useDispatch()

  return (
    <aside className="SeccionIzquierda">
      <div className="SeccionIzquierda__contenedor_campo">
        <label htmlFor="selector-pais" className="SeccionIzquierda__label">País</label>
        <ReactFlagsSelect
          style={{ outline: 'none' }}
          id="selector-pais"
          className="SeccionIzquierda__selector-pais"
          defaultCountry="CL"
          countries={['CL', 'EC']}
          onSelect={codigo => {
            dispatch(fijarPais(codigo))
            dispatch(fijarDestino(codigo))
          }}
        />
      </div>
      <ul className="SeccionIzquierda__links">
        <li>Methodology</li>
        <li onClick={() => dispatch(abrirBandeja())}>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>
    </aside>
  )
}

export default SeccionIzquierda
