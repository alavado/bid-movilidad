import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { fijarPais, fijarDestino } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import configPaises from '../../../config/paises'
import useTextos from '../../../hooks/useTextos'
import './SelectorPais.css'

const SelectorPais = () => {

  const dispatch = useDispatch()
  const paises = configPaises.sort((p1, p2) => p1.nombre > p2.nombre ? 1 : -1)
  const textos = useTextos()

  return (
    <div className="SelectorPais">
      <label htmlFor="selector-pais" className="SelectorPais__label">{textos.seleccionePais}</label>
      <ReactFlagsSelect
        style={{ outline: 'none' }}
        id="selector-pais"
        className="SelectorPais__selector-pais"
        defaultCountry="CO"
        countries={paises.map(({ codigo }) => codigo)}
        customLabels={paises.reduce((obj, p) => ({ ...obj, [p.codigo]: p.nombre }), {})}
        onSelect={codigo => {
          dispatch(fijarPais(codigo))
          dispatch(fijarDestino(codigo))
        }}
      />
    </div>
  )
}

export default SelectorPais