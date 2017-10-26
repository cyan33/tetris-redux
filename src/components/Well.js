import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

import WellGrid from './WellGrid'
import Tetromino from './Tetromino'
import Overlay from './Overlay'
import { COLORS } from '../constants/tetromino'
import { PLAYING } from '../constants/gameStatus'
import { GAME_INTRO } from '../constants/options'

import './styles/Well.css'

export class Well extends Component {
  _getTetrominoProps() {
    const { grid, currTetroGrid, currTetroPosition, currTetromino } = this.props
    return {
      grid,
      color: COLORS[currTetromino],
      tetroGrid: currTetroGrid,
      tetroPosition: currTetroPosition
    }
  }

  render() {
    const { grid, currTetromino, gameStatus } = this.props
    return (
      <div className="well-container">
        <WellGrid grid={ grid } />
        {
          currTetromino &&
            <Tetromino { ...this._getTetrominoProps() } />
        }
        {
          gameStatus !== PLAYING &&
            <Overlay text={marked(GAME_INTRO)} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gameStatus: state.gameStatus,
    grid: state.grid,
    currTetromino: state.currTetromino,
    currTetroGrid: state.currTetroGrid,
    currTetroPosition: state.currTetroPosition
  }
}

export default connect(mapStateToProps)(Well)
