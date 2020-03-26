import React from 'react'
import './App.css'
import Mapa from '../Mapa'
import Header from '../Header'
import SeccionIzquierda from '../SeccionIzquierda'
import SelectorFecha from '../SelectorFecha'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="App__contenedor">
        <SeccionIzquierda />
        <section className="App__mapa">
          <Mapa />
          <SelectorFecha />
        </section>
      </main>
    </div>
  )
}

export default App
