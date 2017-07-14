import React, { Component } from 'react'
import { connect } from 'react-redux'

import Well from './components/Well'
import InfoPanel from './components/InfoPanel'

import {
  gameInit, gamePause, gameResume, gameStart,
  moveLeft, moveRight, enableAccelerate, disableAccelerate, rotate, drop
} from './actions'
import { PLAYING } from './constants/gameStatus'
import { UP, LEFT, RIGHT, DOWN } from './constants/options' 

import './components/styles/TetrisGame.css'

class TetrisGame extends Component {
  constructor() {
    super()

    this._onkeydown = this._onkeydown.bind(this)
    this._onkeyup = this._onkeyup.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this._onkeydown)
    window.addEventListener('keyup', this._onkeyup)

    const { onGameInit } = this.props
    onGameInit()
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._onkeydown)
    window.removeEventListener('keyup', this._onkeyup)
  }

  _onkeydown(e) {
    e.preventDefault()
    
    const {
      onMoveLeft,
      onMoveRight,
      onRotate,
      onEnableAccelerate,
      onDrop,
      isPlaying,
      isAccelerating
    } = this.props

    // todo: delete these later(* debug)
    const { onGameStart } = this.props 

    if (e.keyCode === 83) {
      onGameStart()
      return
    }

    if(!isPlaying) return

    switch(e.keyCode) {
      case UP:
        onRotate()
        break
      case LEFT:
        onMoveLeft()
        break
      case RIGHT:
        onMoveRight()
        break
      case DOWN:
        if (isAccelerating) return
        onEnableAccelerate()
        break
      case 68: // "D"
        onDrop()
        break
      default:
        return
    }
  }

  _onkeyup(e) {
    const { isPlaying, onDisableAccelerate } = this.props
    if (!isPlaying) return

    if (e.keyCode === DOWN) {
      onDisableAccelerate()
    }
  }

  _getInfoPanelProps() {
    const { score, linesCleared, nextTetromino, isPlaying } = this.props
    return {
      score,
      linesCleared,
      nextTetromino,
      isPlaying
    }
  }

  render() {
    return (
      <div className="tetris-container">
        <Well />
        <InfoPanel {...this._getInfoPanelProps()} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    score: state.score,
    linesCleared: state.linesCleared,
    nextTetromino: state.nextTetromino,
    isPlaying: state.gameStatus === PLAYING,
    isAccelerating: state.isAccelerating,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGameInit: () => dispatch(gameInit()),
    onGameStart: () => dispatch(gameStart()),
    onGamePause: () => dispatch(gamePause()),
    onGameResume: () => dispatch(gameResume()),
    onMoveLeft: () => dispatch(moveLeft()),
    onMoveRight: () => dispatch(moveRight()),
    onRotate: () => dispatch(rotate()),
    onDrop: () => dispatch(drop()),
    onEnableAccelerate: () => dispatch(enableAccelerate()),
    onDisableAccelerate: () => dispatch(disableAccelerate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TetrisGame)
