import {
  ADD_TODO,
} from './types';

export const addTodo = data => (
  {
    type: ADD_TODO,
    payload: data,
  }
);
