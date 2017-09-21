import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin() {
    axios.post("/auth", {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      this.props.toggleAuthorization();
      this.props.addToken(res.data.token);
    }).catch(error => {
      console.error(error);
    });
  }

  handleInputChange(event) {
    let target = event.target;
    let key = target.id;
    let value = target.value;

    let newState = this.state;
    newState[key] = value;

    this.setState(newState);
  }

  render() {
    return (
      this.props.isAuthorized
        ? <Redirect to="/"/>
        : <div id="content">
            <Glyphicon id="cloud" glyph="cloud"/>
            <Form className="login-form" onSubmit={this.handleLogin}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="user"/>
                  </InputGroup.Addon>
                  <FormControl id="username" type="text" onChange={this.handleInputChange}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="lock"/>
                  </InputGroup.Addon>
                  <FormControl id="password" type="password" onChange={this.handleInputChange}/>
                </InputGroup>
              </FormGroup>
              <Button type="reset">Cancel</Button>
              <Button className="login-button" onClick={this.handleLogin}>Login</Button>
            </Form>
      </div>
    );
  }
}

Login.PropTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  toggleAuthorization: PropTypes.func.isRequired,
  addToken: PropTypes.func.isRequired
};

export default connect()(Login);