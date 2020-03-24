import React, { useState } from 'react'
import './SelectorFecha.css'
import { useDispatch } from 'react-redux'
import { fijarDia } from '../../redux/actions'

const SelectorFecha = () => {

  const [dia, setDia] = useState(0)
  const dispatch = useDispatch()

  return (
    <div className="SelectorFecha">
      <input type="range" step="1" min="0" max="180" onChange={e => {
        setDia(e.target.value)
        dispatch(fijarDia(e.target.value))
      }} />
    </div>
  )
}

export default SelectorFecha
