import { combineReducers } from 'redux'

import gameStatus from './gameStatus'
// import keyboard from './keyboard'

const root = combineReducers({
  gameStatus,
  // keyboard,
})

export default root