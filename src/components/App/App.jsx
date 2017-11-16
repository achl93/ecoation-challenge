import React, { Component } from 'react';
import axios from 'axios';
const querystring = require('querystring');
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { incrementInteger } from '../../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      integer: '',
      newInt: ''
    };
    this.handleCurrentInt = this.handleCurrentInt.bind(this);
    this.handleNextInt = this.handleNextInt.bind(this);
    this.handleNewInt = this.handleNewInt.bind(this);
    this.editInt = this.editInt.bind(this);
  }

  handleCurrentInt(e) {
    e.preventDefault();
    axios.get(`http://localhost:8888/api/${this.props.currentUser.email}/current`)
      .then((res) => {
        console.log(res);
        this.setState({ integer: res.data.integer });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleNextInt(e) {
    e.preventDefault();
  }

  handleNewInt(e) {
    this.setState({
      newInt: Number(e.target.value)
    });
  }

  editInt(e) {
    e.preventDefault();
    this.setState({
      integer: Number(this.state.newInteger),
      newInt: ''
    });
    // update DB with current int
    document.getElementById('edit').reset();
  }

  render() {
    return (
      <div>
        <div>Current Integer: {this.state.integer}</div>
        <button onClick={this.handleCurrentInt}>Get Current</button>
        <button onClick={this.handleNextInt}>+ Increment</button>
        <div>Edit Integer</div>
        <form 
          id='edit'
          onSubmit={this.handleEdit}
        >
          <input
            onChange={this.handleNewInt}
            placeholder='New Integer Value'
            type='number'
          />
          <button type='submit'>Edit</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(App);
