import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/home'
import User from '../pages/user'
import Error from '../pages/error'
import Navbar from './common/navBar'

function App() {
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  )
}

export default App;
