import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './root/Home';
import Login from '../containers/auth/Login';

import './App.css';

function PrivateRoute({ component: Component, isAuthorized, ...rest}) {
  return (
    isAuthorized
    ? <Route {...rest} render={props => (
        <Component {...props}/>
      )}/>
    : <Redirect to="/login"/>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/" component={Home} isAuthorized={this.props.isAuthorized}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
};

export default App;
