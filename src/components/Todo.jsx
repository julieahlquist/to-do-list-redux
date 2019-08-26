import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, test }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.PropTypes = {
  onClick:  PropTypes.func.isRequired,
  completed: PropTypes.bool.is.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;