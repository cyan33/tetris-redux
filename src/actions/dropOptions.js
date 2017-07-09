import { ACCELERATE, DROPFRAME_INC } from '../constants/actionTypes'

export function accelerate() {
  return {
    type: ACCELERATE
  }
}

export function increaseDropFrame() {
  return {
    type: DROPFRAME_INC
  }
}
