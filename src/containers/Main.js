import React from 'react'
import Header from './Header/Header'
import Overview from './Overview/Overview'
import Learn from './Learn/Learn'
import Myths from './Myths/Myths'

const Main = () => {
  return (
    <div className='main-wrapper'>
      <Header />
      <Overview />
      <Learn />
      <Myths />
    </div>
  )
}
export default Main
