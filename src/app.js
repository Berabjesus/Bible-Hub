import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Bible from './pages/bible';
import Read from './pages/read';
import Favorites from './pages/favorites';
import About from './pages/about';
import Error from './pages/error';
import Navbar from './components/common/navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="mt-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/bible/:id" component={Bible} />
          <Route path="/read/:bible" component={Read} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/about" component={About} />
          <Route path="*" component={Error} />
        </Switch>
      </main>
    </Provider>
  );
}

export default App;
