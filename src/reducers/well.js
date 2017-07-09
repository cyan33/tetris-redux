import { 
  LINE_CLEARED, TETRIMINO_LAND,
  LEFT, ROTATE, RIGHT, DROP, ACCELERATE,
} from '../constants/actionTypes'

export default function well(state = {}, action) {
  switch(action.type) {
    // the grid of the well is static, and it doesn't
    // count the current dropping tetrimino3 
    default:
      return state
  }
}
