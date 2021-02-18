import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/index'
import './scss/style.scss'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
