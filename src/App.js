import React from 'react'
import Navbar from './components/Navbar'
import Sidenav from './components/Sidenav'
import './styles/App.scss'
import About from './views/About'
import Contact from './views/Contact'
import Home from './views/Home'
import Testimonial from './views/Testimonial'
import Work from './views/Work'

const App = () => {
  return (
    <div>
      <Sidenav/>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App