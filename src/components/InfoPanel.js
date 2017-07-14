import React, { Component } from 'react'

import { PLAYING } from '../constants/gameStatus'
const InfoPanel = ({
  score,
  linesCleared,
  nextTetromino,
  gameStatus
}) => (
  <div>
    <h3>Score</h3>
    <p>{ score }</p>
    <h3>Lines Cleared</h3>
    <p>{ linesCleared }</p>
    <h3>nextTetromino</h3>
    {
      gameStatus === PLAYING &&
        <Tetromino />
    }
  </div>
)

export default InfoPanel
