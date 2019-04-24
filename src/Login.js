import React, { Component } from 'react';
import Greet from './Greet';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Class Component</h1>
        <Greet />
      </div>
    );
  }
}

export default Login;