import React, { useEffect } from 'react'
import './App.css'
import Mapa from '../Mapa'
import Header from '../Header'
import SeccionIzquierda from '../SeccionIzquierda'
import SelectorFecha from '../SelectorFecha'
import Bandeja from '../Bandeja'
import MenuOverlay from '../MenuOverlay'
import { useDispatch } from 'react-redux'
import { seleccionarIdioma } from '../../redux/actions'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(seleccionarIdioma('es'))
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="App__contenedor">
        <MenuOverlay />
        <SeccionIzquierda />
        <section className="App__contenedor_central">
          <Bandeja />
          <section className="App__mapa">
            <Mapa />
            <SelectorFecha />
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
