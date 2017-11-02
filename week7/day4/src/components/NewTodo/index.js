import React, { Component } from 'react';
import './index.css';

class NewTodo extends Component {

  constructor(props) {
    super(props);
    this.state = { newTodo : '' }
  }

  handleNewTodoChange = (event) => {
    const newTodo = event.currentTarget.value;
    this.setState({ newTodo });
  }

  handleAddTodo = () => {
    (this.state.newTodo !== '') && this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo : '' });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="NewTodo">
      <form onSubmit= { this.handleSubmit }>
        <input type="text" placeholder="do this" value={ this.state.newTodo } onChange={ this.handleNewTodoChange } />
        <button onClick={ this.handleAddTodo }>√</button>
        </form>
      </div>
    )
  }
}



export default NewTodo;
