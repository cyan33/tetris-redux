import { GAME_START, GAME_PAUSE, GAME_RESUME, GAME_STOP } from '../constants/actionTypes'
import { PLAYING, PAUSING, STOPPED } from '../constants/gameStatus'

export default function gameStatusReducer(state = STOPPED, action) {
  switch(action.type) {
    case GAME_START:
    case GAME_RESUME:
      return PLAYING
    case GAME_PAUSE:
      return PAUSING
    case GAME_STOP:
      return STOPPED
    default:
      return state
  }
}
