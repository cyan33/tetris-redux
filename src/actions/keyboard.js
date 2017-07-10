import { MOVE, ACCELERATE, DROP, ROTATE } from '../constants/actionTypes'

export const move = (direction) => {
  // 1: right
  // -1: left
  return {
    type: MOVE,
    payload: direction
  }
}

export const drop = () => {
  return {
    type: DROP
  }
}

export const accelerate = () => {
  return {
    type: ACCELERATE
  }
}

export const rotate = () => {
  return {
    type: ROTATE
  }
}
