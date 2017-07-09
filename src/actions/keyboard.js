import { LEFT, RIGHT, ACCELERATE, DROP, ROTATE } from '../constants/actionTypes'

export const moveLeft = () => {
  return {
    TYPE: LEFT
  }
}

export const moveRight = () => {
  return {
    TYPE: RIGHT
  }
}

export const drop = () => {
  return {
    TYPE: DROP
  }
}

export const accelerate = () => {
  return {
    TYPE: ACCELERATE
  }
}

export const rotate = () => {
  return {
    TYPE: ROTATE
  }
}
