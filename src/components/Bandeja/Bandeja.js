import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cerrarBandeja, abrirBandeja } from '../../redux/actions'
import './Bandeja.css'
import { Switch, Route, useLocation, Link } from 'react-router-dom'
import { faChevronLeft as iconoCerrar } from '@fortawesome/free-solid-svg-icons'
import AcercaDe from './AcercaDe'
import Contacto from './Contacto'
import Metodologia from './Metodologia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div className="Bandeja__contenido">
        <Switch>
          <Route path="/about" component={AcercaDe} />
          <Route path="/methodology" component={Metodologia} />
          <Route path="/contact" component={Contacto} />
        </Switch>
      </div>
      <Link className="Bandeja__cerrar" to="/">
        <FontAwesomeIcon icon={iconoCerrar} />
      </Link>
    </div>
  )
}

export default Bandeja
