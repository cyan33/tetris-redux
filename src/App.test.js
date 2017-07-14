import React from 'react';
import ReactDOM from 'react-dom';
import TetrisGame from './TetrisGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TetrisGame />, div);
});
