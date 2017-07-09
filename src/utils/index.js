import _ from 'lodash'

import { WELL_COL, WELL_ROW } from '../constants/options'
import { TETROMINOS } from '../constants/tetrominos'

export function generateEmptyWellGrid(row = WELL_ROW, col = WELL_COL) {
  return _.times(row, () => {
    return _.times(col, () => null)
  })
}

export function getRandomTetrimino() {
  const rand = Math.floor(Math.random() * TETROMINOS.length)
  return TETROMINOS[rand]
}

export function createEmptyLine(col = WELL_COL) {
  return _.times(col, () => null)
}
