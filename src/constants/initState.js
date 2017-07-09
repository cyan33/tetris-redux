// the initial state tree object

import { STOPPED } from './gameStatus'
import { generateEmptyWellGrid, getRandomTetrimino } from '../utils'

export const newGame = {
  gameStatus: STOPPED,
  bonus: {
    score: 0,
    linesCleared: 0
  },
  well: {
    // grid: generateEmptyWellGrid(),
    // currTetrimino: getRandomTetrimino(),
    // currTetriGrid: ,
    // currTetriPosition:
  },
  dropOptions: {
    dropFrames: 48,
    isAccelerating: false
  }
}