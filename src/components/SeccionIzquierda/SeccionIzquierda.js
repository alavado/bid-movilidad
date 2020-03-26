import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'
import { useDispatch } from 'react-redux'
import { fijarPais } from '../../redux/actions'

const SeccionIzquierda = () => {

  const dispatch = useDispatch()

  return (
    <aside className="SeccionIzquierda">
      <label htmlFor="selector-pais" className="SeccionIzquierda__label">País</label>
      <ReactFlagsSelect
        id="selector-pais"
        className="SeccionIzquierda__selector-pais"
        defaultCountry="CL"
        countries={['AR', 'CL']}
        onSelect={codigo => dispatch(fijarPais(codigo))}
      />
    </aside>
  )
}

export default SeccionIzquierda
