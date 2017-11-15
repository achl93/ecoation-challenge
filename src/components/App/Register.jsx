import React, { Component } from 'react';

// import 'src/assets/stylesheets/base.scss';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleRegister.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleRegister(e) {
    e.preventDefault();
    const userObj = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userObj);
    // Save this to DB
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleRegister}>
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
          <button type='submit'>Register</button>
        </form>
      </div>
    );
  }
};
