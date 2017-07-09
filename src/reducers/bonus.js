import _ from 'lodash'

import { LINE_CLEARED, GAIN_SCORE } from '../constants/actionTypes'
// todo: the increment of gain score itself should be increasing as well

const initState = {
  score: 0,
  linesCleared: 0,
}

export default function bonus(state = initState, action) {
  switch(action.type) {
    case LINE_CLEARED:
      return _.merge({}, state, { linesCleared: state.linesCleared + 1 })
    case GAIN_SCORE:
      return _.merge({}, state, {
        score: state.score + action.payload
      })
    default:
      return state
  }
}