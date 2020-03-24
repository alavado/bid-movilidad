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
      <div className="App__contenedor">
        <SeccionIzquierda />
        <div className="App__mapa">
          <Mapa />
          <SelectorFecha />
        </div>
      </div>
    </div>
  )
}

export default App
