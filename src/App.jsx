import React from 'react'
import "./App.css"
import "./input.css"
import SearchBar from './components/SearchBar'
import Object from './components/Object'
import Login from './components/Login'
import Login2 from './components/Login2'
import Calculator from './components/Calculator'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div className='main'>
      <SearchBar />
      <Object />
      <Login />
      <Login2 />
      <Calculator />
      <Pokemon />
    </div>
  )
}

export default App
