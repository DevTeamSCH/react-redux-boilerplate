import React from 'react';
import TodoContainer from '../containers/TodoContainer';
import { APIKEY } from '../config';

const App = () => (
  <div className={APIKEY}>
    <TodoContainer />
  </div>
);

export default App;
