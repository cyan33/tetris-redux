import React from 'react';
import ReactDOM from 'react-dom';
import root from './reducers/root'
import _ from 'lodash'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import TetrisGame from './TetrisGame'

const rootStore = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// DEBUG
window.root = rootStore
window._ = _

ReactDOM.render(
  <Provider store={rootStore}>
    <TetrisGame />
  </Provider>,
  document.getElementById('root')
)
