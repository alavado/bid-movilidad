import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Header = () => {

  const { dia } = useSelector(state => state.mapa)
  moment().locale('es')

  return (
    <div className="Header">
      <div className="Header__titulo">
        <h1 className="Header__texto-titulo">BID Movilidad</h1>
      </div>
      <div className="Header__barra">
        Día {moment('2020-01-01').add(dia, 'days').format('LLLL')}
      </div>
    </div>
  )
}

export default Header
