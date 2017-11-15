import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

// import 'src/assets/stylesheets/base.scss';

class Login extends Component {
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
    const users = this.props.users;
    let matchingCredentials = 0;
    for (let i = 1; i < users.length; i++) {
      if (users[i].email === this.state.email && users[i].password === this.state.password) {
        matchingCredentials++;
      }
    }
    if (matchingCredentials === 1) {
      this.setState({ authenticated: true });
    }
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

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Login);
