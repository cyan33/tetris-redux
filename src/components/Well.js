import React, { Component } from 'react'
import { connect } from 'react-redux'

import WellGrid from './WellGrid'
import Tetromino from './Tetromino'
import { COLORS } from '../constants/tetromino'

import './styles/Well.css'

// const shit = [[null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null, null, null],
// [null, null, null, null, null, "#b04497", null, null, null, null],
// [null, null, null, null, "#b04497", "#b04497", "#b04497", null, null, null],
// [null, null, null, null, null, "#ed652f", null, null, null, null],
// [null, null, null, "#ed652f", "#ed652f", "#ed652f", null, null, null, null]]

class Well extends Component {
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
    const { grid, currTetromino } = this.props
    return (
      <div className="well-container">
        <WellGrid grid={ grid } />
        {
          currTetromino &&
            <Tetromino { ...this._getTetrominoProps() } />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    grid: state.grid,
    currTetromino: state.currTetromino,
    currTetroGrid: state.currTetroGrid,
    currTetroPosition: state.currTetroPosition
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Well)
