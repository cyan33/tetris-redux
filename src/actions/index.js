import {
  GAME_INIT,
  GAME_START,
  GAME_PAUSE,
  GAME_STOP,
  GAME_RESUME
} from '../constants/actionTypes'

import { MOVE, ENABLE_ACCELERATE, DISABLE_ACCELERATE, DROP, ROTATE } from '../constants/actionTypes'
import { PLAYING, STOPPED } from '../constants/gameStatus'
import { DROP_INTERVAL_ACCELERATING } from '../constants/options'

export function gameInit() {
  return {
    type: GAME_INIT,
  }
}

// thunk
export const gameStart = () => (dispatch, getState) => {
  // the previous gameStatus
  const { gameStatus } = getState()

  dispatch({ type: GAME_START })

  // skip dispatch if it's restart
  if (gameStatus === STOPPED) {
    dispatch(drop())
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

// thunk
export const drop = () => (dispatch, getState) => {
  const { gameStatus, isAccelerating, dropInterval } = getState()
  if (gameStatus === STOPPED) return

  if (gameStatus === PLAYING) {
    dispatch({ type: DROP })
  }

  setTimeout(() => {
    dispatch(drop())
  }, isAccelerating ? DROP_INTERVAL_ACCELERATING : dropInterval)
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
