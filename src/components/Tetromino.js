import React, { Component } from 'react'

import SquareBlock from './SquareBlock'

export default class Tetromino extends Component {
  _getTetrominoStyle() {
    const { grid, tetroGrid, tetroPosition } = this.props
    if (!grid)  return

    const rows = grid.length
    const cols = grid[0].length

    // for each single block
    const widthPercent = 100 / cols
    const heightPercent = 100 / rows

    /*
      why we use "4" here directly? B/c 4 is the maximum length or width of a tetromino.
      Therefore, giving each child-block { width: 25%, height: 25% } and its according { top, left }
      wouldn't make any of them overflow
    */
    return {
      width: `${4 * widthPercent}%`,
      height: `${4 * heightPercent}%`,
      top: `${tetroPosition.y * heightPercent}%`,
      left: `${tetroPosition.x * widthPercent}%`
    }
  }

  _renderTetromino() {
    const { tetroGrid, tetroPosition, color } = this.props
    if (!tetroGrid) return

    const rows = tetroGrid.length
    const cols = tetroGrid[0].length
    let result = []

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (!tetroGrid[row][col]) continue
  
        result.push(
          <li className="square-block-container"
            key={`t-${row}${col}`}
            // 25 is a quarter of 100, since each of the tetromino is a 4 x 4 square, as we declared above
            style={{
              top: `${row * 25}%`,
              left: `${col * 25}%`
            }}>
            <SquareBlock color={color} />
          </li>
        )
      }
    }
    return result
  }

  render() {
    return (
      <ul className="tetromino" style={this._getTetrominoStyle()}>
        { this._renderTetromino() }
      </ul>
    )
  }
}
