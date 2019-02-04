import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Links from './views/Links';
import about from './views/about';
import notFound from './views/notFound';
import home from './views/home';
import getGify from './views/getGify';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My cool react app</h1>
        <small>click the link below</small>
        <br />
        <Link to="/">
          <h2>home</h2>
        </Link>
        <Switch>
          <Route exact path="/" component={Links} />
          <Route path="/notfound" component={notFound} />
          <Route path="/about" component={about} />
          <Route path="/home" component={home} />
          <Route path="/random-gify" component={getGify} />
        </Switch>
      </div>
    );
  }
}

export default App;
