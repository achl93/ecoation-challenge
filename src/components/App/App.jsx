import React, { Component } from 'react';
import axios from 'axios';
const querystring = require('querystring');
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

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
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleCurrentInt(e) {
    e.preventDefault();
    axios.get(`http://localhost:8888/api/${this.props.currentUser.email}/current`)
      .then((res) => {
        console.log(res);
        this.setState({ integer: Number(res.data.integer) });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleNextInt(e) {
    e.preventDefault();
    axios.get(`http://localhost:8888/api/${this.props.currentUser.email}/next`)
      .then((res) => {
        console.log(res);
        this.setState({ integer: Number(res.data.integer) });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleNewInt(e) {
    this.setState({
      newInt: Number(e.target.value)
    });
  }

  handleEdit(e) {
    e.preventDefault();
    const updateObj = {
      newInt: this.state.newInt,
      email: this.props.currentUser.email
    };
    axios.post(`http://localhost:8888/api/${this.props.currentUser.email}/modify`, querystring.stringify(updateObj))
      .then(res => {
        console.log(res);
        this.setState({
          integer: Number(this.state.newInt),
          newInt: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
    document.getElementById('edit').reset();
  }

  render() {
    return (
      <div className='row w-25'>
        <div className='col-md-12 col-sm-12 text-center mx-auto'>
          <div className='row'>
            <h1>Incrementing Integers As A Service</h1>
          </div>
          <div className='row'>
            <div>Current Integer: {this.state.integer}</div>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleCurrentInt}>Get Current</Button>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleNextInt}>+ Increment</Button>
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
              <Button bsStyle="primary" type='submit'>Edit</Button>
            </form>
          </div>
        </div>
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
