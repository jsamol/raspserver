import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div id="content">
        <Glyphicon id="cloud" glyph="cloud"/>
        <Form className="login-form">
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="user"/>
              </InputGroup.Addon>
              <FormControl type="text"/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="lock"/>
              </InputGroup.Addon>
              <FormControl type="password"/>
            </InputGroup>
          </FormGroup>
          <Button type="cancel">Cancel</Button>
          <Button className="login-button" type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;