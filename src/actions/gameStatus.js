import {
  GAME_START,
  GAME_PAUSE,
  GAME_STOP
} from '../constants/actionTypes'

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
