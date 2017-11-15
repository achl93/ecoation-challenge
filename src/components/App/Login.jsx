import React, { Component } from 'react';
import { Redirect } from 'react-router';

// import 'src/assets/stylesheets/base.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      authenticated: false
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    // Do an authentication and redirect if successful
    // Redirect to main app for now
    this.setState({ authenticated: true });
  }

  render() {
    const { authenticated } = this.state;
    if (!authenticated) {
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={this.handleLogin}>
            <input
              onChange={this.handleEmail} 
              placeholder='Email' 
              type='email'
            />
            <input 
              onChange={this.handlePassword}
              placeholder='Password' 
              type='password'
            />
            <button type='submit'>Login</button>
          </form>
        </div>
      );
    } else {
      return (
        <Redirect to='/app' />
      );
    }
  }
};
