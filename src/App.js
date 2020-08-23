import React from 'react'
import './App.css'
import Main from './containers/Main'
import fade from './util/fade.js'

function App() {
  fade(false)
  return (
    <div className='App-Container'>
      <Main />
    </div>
  )
}

export default App
