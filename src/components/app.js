import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/home'
import User from '../pages/bible'
import About from '../pages/about'
import Error from '../pages/error'
import Navbar from './common/navBar'

function App() {
  return(
    <>
      <Navbar />
      <div className='pt-5 mx-1 mt-1 bg-white'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/about" component={About} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </>
  )
}

export default App;
