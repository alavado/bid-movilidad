import React from 'react'
import './App.css'
import Mapa from '../Mapa'
import Header from '../Header'
import SeccionIzquierda from '../SeccionIzquierda'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App__contenedor">
        <SeccionIzquierda />
        <Mapa />
      </div>
    </div>
  )
}

export default App
