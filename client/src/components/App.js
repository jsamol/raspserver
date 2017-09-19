import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './root/Home';
import Login from './auth/Login';

import './App.css';

function PrivateRoute({ component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
      <Component {...props}/>
    )}/>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
