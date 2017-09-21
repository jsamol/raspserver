import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';

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
    }).then(function(res) {

    }).catch(function(error) {
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
      <div id="content">
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
          <Button className="login-button" type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;