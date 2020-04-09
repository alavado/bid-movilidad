import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cerrarBandeja } from '../../redux/actions'
import './Bandeja.css'

const Bandeja = () => {

  const { abierta } = useSelector(state => state.bandeja)
  const dispatch = useDispatch()

  return (
    <div className="Bandeja" style={{ width: abierta ? '26em' : 0 }}>
      bandeja
      <button onClick={() => dispatch(cerrarBandeja())}>Cerrar</button>
    </div>
  )
}

export default Bandeja
