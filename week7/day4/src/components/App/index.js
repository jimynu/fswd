import React, { Component } from 'react';
import './index.css';
import Header from '../Header';
import Filter from '../Filter';
import NewTodo from '../NewTodo';
import TodoList from '../TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: 'JavaScript', completed: false },
        { id: 2, content: 'React', completed: false },
        { id: 3, content: 'Redux', completed: false }
      ],
      nextId: 4,
      filter: 'all',
    }
  }

  increaseIdAndGet() {
    const nextId = this.state.nextId;
    this.setState({ nextId: nextId+1 });
    return nextId;
  }

  addTodo = (todo) => {
    const newTodos = this.state.todos.concat( {id: this.increaseIdAndGet(), content: todo, completed: false } );
    this.setState({ todos: newTodos });
  }

  completeTodo = (todo) => {
    const newTodos = this.state.todos.map( existingTodo => {
      if (existingTodo.id === todo.id) {
        return { id: todo.id, content: todo.content, completed: !todo.completed };
      } else {
        return existingTodo;
      }
    });

    this.setState({ todos: newTodos });
  }

  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  }

  filterTodos = () => {
    const filter = this.state.filter;

    if (filter === 'all') {
      return this.state.todos;
    } else if (filter === 'pending') {
      return this.state.todos.filter( todo => { return !todo.completed } )
    } else if (filter === 'completed') {
      return this.state.todos.filter( todo => { return todo.completed } )
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewTodo addTodo={ this.addTodo } />
        <Filter activeFilter={ this.state.filter } changeFilter={ this.changeFilter }  />
        <TodoList todos={ this.filterTodos() } completeTodo={ this.completeTodo } />
      </div>
    );
  }
}

export default App;
