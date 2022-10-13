import React from 'react'
import Sidenav from './components/Sidenav'
import Routers from './Routers'
import './styles/App.scss'
import About from './views/About'
import Home from './views/Home'
import Work from './views/Work'

const App = () => {
  return (
    <div>
      <Sidenav/>
      <Home/>
      <About/>
      <Work/>
    </div>
  )
}

export default App