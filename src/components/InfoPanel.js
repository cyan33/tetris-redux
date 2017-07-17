import React, { Component } from 'react'

import ControlButtons from './ControlButtons'
import Tetromino from './Tetromino'

import './styles/InfoPanel.css'

const InfoPanel = ({
  score,
  linesCleared,
  nextTetromino,
  isPlaying
}) => (
  <div className="info-container">
    <div className="next-tetro">
      <h3 className="info-title big">Next Tetro</h3>
      {
        isPlaying &&
          <div>{nextTetromino}</div>
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

export default InfoPanel
