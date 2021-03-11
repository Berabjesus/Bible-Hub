import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Home from '../page/home'
import User from '../page/user'
import Error from '../page/error'
import Navbar from './common/navbar'

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
