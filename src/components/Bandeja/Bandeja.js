import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cerrarBandeja, abrirBandeja } from '../../redux/actions'
import './Bandeja.css'
import { Switch, Route, useLocation, Link } from 'react-router-dom'
import AcercaDe from './AcercaDe'
import Contacto from './Contacto'
import Metodologia from './Metodologia'

const Bandeja = () => {

  const { abierta } = useSelector(state => state.bandeja)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    if (['/about', '/methodology', '/contact'].includes(location.pathname)) {
     dispatch(abrirBandeja())
    }
    else {
      dispatch(cerrarBandeja())
    }
  }, [location.pathname])

  return (
    <div className="Bandeja" style={{ width: abierta ? '26em' : 0 }}>
      <Switch>
        <Route path="/about" component={AcercaDe} />
        <Route path="/methodology" component={Metodologia} />
        <Route path="/contact" component={Contacto} />
      </Switch>
      <Link to="/">Cerrar</Link>
    </div>
  )
}

export default Bandeja
