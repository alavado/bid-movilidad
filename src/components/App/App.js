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
import FormularioSuscripcion from '../FormularioSuscripcion'
import { Route } from 'react-router-dom'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('idioma')) {
      dispatch(seleccionarIdioma(params.get('idioma')))
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="App__contenedor">
        <MenuOverlay />
        <SeccionIzquierda />
        <section className="App__contenedor_central">
          {/* <Bandeja /> */}
          <Route path="/suscripcion" component={FormularioSuscripcion} />
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
