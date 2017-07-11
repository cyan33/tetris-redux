import {
  GAME_START,
  GAME_PAUSE,
  GAME_STOP,
  GAME_RESUME
} from '../constants/actionTypes'

import { MOVE, ENABLE_ACCELERATE, DISABLE_ACCELERATE, DROP, ROTATE } from '../constants/actionTypes'

export function gameStart() {
  return {
    type: GAME_START,
  }
}

export function gamePause() {
  return {
    type: GAME_PAUSE,
  }
}

export function gameResume() {
  return {
    type: GAME_RESUME,
  }
}

export function gameStop() {
  return {
    type: GAME_STOP,
  }
}

export const moveRight = () => {
  return {
    type: MOVE,
    payload: 1
  }
}

export const moveLeft = () => {
  return {
    type: MOVE,
    payload: -1
  }
}

export const drop = () => {
  return {
    type: DROP
  }
}

export const enableAccelerate = () => {
  return {
    type: ENABLE_ACCELERATE
  }
}

export const disableAccelerate = () => {
  return {
    type: DISABLE_ACCELERATE
  }
}

export const rotate = () => {
  return {
    type: ROTATE
  }
}
