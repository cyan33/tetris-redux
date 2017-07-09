import { combineReducers } from 'redux'

import gameStatus from './gameStatus'
import bonus from './bonus'
import well from './well'

const root = combineReducers({
  gameStatus,
  bonus,
  well,
})

export default root