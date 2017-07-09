import { ACCELERATE, DROPFRAME_INC } from '../constants/actionTypes'

export default function dropOptions(state = {}, action) {
  switch(action.type) {
    case ACCELERATE:
    case DROPFRAME_INC:
    default:
      return state
  }
}
