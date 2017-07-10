import React from 'react';
import ReactDOM from 'react-dom';
import root from './reducers/root'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'
import { fuck } from './__test__'
import './index.css';

const rootStore = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)

// DEBUG
window.root = rootStore
window.fuck = fuck

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
