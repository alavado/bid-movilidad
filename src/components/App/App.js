import React from 'react'
import './App.css'
import Mapa from '../Mapa'
import Header from '../Header'
import SeccionIzquierda from '../SeccionIzquierda'
import SelectorFecha from '../SelectorFecha'
import Bandeja from '../Bandeja'
import MenuOverlay from '../MenuOverlay'

const App = () => {
  return (
    <div className="App">
      <MenuOverlay />
      <Header />
      <main className="App__contenedor">
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
