import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const Todo = ({ onClick, children }) => (
  <button onClick={() => onClick('hehe')}>
    {children}
  </button>
);

export default Todo;
