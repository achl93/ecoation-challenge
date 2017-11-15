import React, { Component } from 'react';
import Current from './Current';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      integer: 0,
      newInteger: null
    };
    this.handleNextInt = this.handleNextInt.bind(this);
    this.handleNewInt = this.handleNewInt.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleNextInt() {
    let curr = this.state.integer;
    this.setState({
      integer: curr + 1
    });
  }

  handleNewInt(e) {
    this.setState({
      newInteger: e.target.value
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({
      integer: Number(this.state.newInteger),
      newInteger: null
    });
    document.getElementById('edit').reset();
  }

  render() {
    return (
      <div>
        <div>Current Integer</div>
        <Current integer={this.state.integer} />
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
