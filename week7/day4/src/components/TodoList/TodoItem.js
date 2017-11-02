import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


class TodoItem extends Component {
  handleClick = (event) => {
    this.props.completeTodo(this.props.todo)
  }

  render() {
    return (
      <li onClick={ this.handleClick }
      key={ this.props.index }
      className={ this.props.todo.completed ? 'TodoItem-completed' : '' } >
        { this.props.todo.content }
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
