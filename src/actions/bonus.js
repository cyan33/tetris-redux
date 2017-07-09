import { LINE_CLEARED, GAIN_SCORE } from '../constants/actionTypes'

export function gainLineCleared() {
  return {
    type: LINE_CLEARED
  }
}

export function gainScore(inc) {
  return {
    type: GAIN_SCORE,
    payload: inc
  }
}
