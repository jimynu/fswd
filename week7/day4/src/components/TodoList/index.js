import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';


class TodoList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.todos.map( todo => {
            return <TodoItem key={ todo.id } todo ={ todo } completeTodo={ this.props.completeTodo } />;
          })
        }
      </ul>
    );
  }
}

export default TodoList;


TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
