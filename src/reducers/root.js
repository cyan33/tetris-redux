import _ from 'lodash'
import {
  GAME_START, GAME_PAUSE, GAME_RESUME, GAME_STOP,
  CLEAR_LINE, TETROMINO_LAND,
  MOVE, ROTATE, DROP
} from '../constants/actionTypes'
import { PLAYING, PAUSING, STOPPED } from '../constants/gameStatus'

import { 
  getRandomTetromino, generateEmptyWellGrid, getInitTetroPosition,
  isPositionAvailable, rotate, fitTetrominoWithinBoundaries,
  generateInitState
} from '../utils'
import { SHAPES } from '../constants/tetromino'

export default function root(state = {}, action) {
  let {
    gameStatus,
    bonus,
    grid,
    nextTetromino,
    currTetroGrid,
    currTetromino,
    currTetroPosition,
  } = state

  let newPosition
  
  switch(action.type) {
    // the grid of the well is static, and it doesn't
    // count the current dropping tetromino
    case GAME_START:
      return generateInitState(true)
    case GAME_PAUSE:
      return _.merge({}, state, { gameStatus: PAUSING })
    case GAME_RESUME:
      return _.merge({}, state, { gameStatus: PLAYING })
    case MOVE:
      // horizontal move
      newPosition = {
        x: currTetroPosition.x + action.payload,
        y: currTetroPosition.y
      }

      if (!isPositionAvailable(grid, currTetroGrid, newPosition)) return state
      
      return _.merge({}, state, {
        currTetroPosition: newPosition
      })
    case ROTATE:
      const newTetroGrid = rotate(currTetroGrid)
      newPosition = fitTetrominoWithinBoundaries(grid, newTetroGrid, currTetroPosition)
    
      if (!isPositionAvailable(grid, newTetroGrid, newPosition))  return state
      
      else return _.merge({}, state, {
        currTetroGrid: newTetroGrid,
        currTetroPosition: newPosition
      })
    case DROP:

    case TETROMINO_LAND:
    case CLEAR_LINE:

    default:
      return state
  }
}
