import React, { Component } from 'react'

const GameStatusButton = ({
  onClickHandler,
  text
}) => (
  <button className="gameStatus-btn" onClick={onClickHandler}>
    { text }
  </button>
)

export default GameStatusButton
