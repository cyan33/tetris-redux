import React, { Component } from 'react'
import { connect } from 'react-redux'

import ControlButtons from './ControlButtons'
import Tetromino from './Tetromino'

import { NEXT_TETRO_COLOR, SHAPES } from '../constants/tetromino'
import { STOPPED } from '../constants/gameStatus'

import './styles/InfoPanel.css'

class InfoPanel extends Component {
  _getTetrominoProps() {
    const { nextTetromino } = this.props
    return {
      color: NEXT_TETRO_COLOR,
      tetroGrid: SHAPES[nextTetromino],
      isNextTetromino: true
    }
  }

  render() {
    const { score, linesCleared, gameStatus } = this.props
    
    return (
      <div className="info-container">
        <div className="next-tetro">
          <h3 className="info-title big">Next Tetro</h3>
          {
            gameStatus !== STOPPED &&
              <Tetromino {...this._getTetrominoProps()} />
          }
        </div>
        <div className="score">
          <div className="section">
            <h3 className="info-title small">Your Score</h3>
            <p className="info-value">{ score }</p>
          </div>
          <div className="section">
            <h3 className="info-title small">Lines Cleared</h3>
            <p className="info-value">{ linesCleared }</p>
          </div>
        </div>
        <ControlButtons />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(InfoPanel)
