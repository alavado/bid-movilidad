import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'

const SeccionIzquierda = () => {
  return (
    <div className="SeccionIzquierda">
      <label for="selector-pais" className="SeccionIzquierda__label">País</label>
      <ReactFlagsSelect
        id="selector-pais"
        className="SeccionIzquierda__selector-pais"
        defaultCountry="CL"
        countries={["AR", "BR", "CL"]}
      />
    </div>
  )
}

export default SeccionIzquierda
