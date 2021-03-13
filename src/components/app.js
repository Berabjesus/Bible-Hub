import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/home'
import Bible from '../pages/bible'
import Read from '../pages/read'
import About from '../pages/about'
import Error from '../pages/error'
import Navbar from './common/navBar'

function App() {
  return(
    <>
      <Navbar />
      <main className='mx-1 mt-1'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bible" component={Bible} />
          <Route path="/read" component={Read} />
          <Route path="/about" component={About} />
          <Route path="*" component={Error} />
        </Switch>
      </main>
    </>
  )
}

export default App;
