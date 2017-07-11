import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  gamePause, gameResume, gameStart, gameStop,
  moveLeft, moveRight, enableAccelerate, disableAccelerate, rotate
} from './actions'
import { UP, LEFT, RIGHT, DOWN } from './constants/options' 

import './App.css'

class App extends Component {
  constructor() {
    super()

    this._onkeydown = this._onkeydown.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this._onkeydown)
    window.addEventListener('keyup', this._onkeyup)
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
      onEnableAccelerate
    } = this.props

    // todo: delete these later(* debug)
    const { onGameStart } = this.props 

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
        onEnableAccelerate()
      case 83: // "S" => START
        onGameStart()
        break
      default:
        return
    }
  }

  _onkeyup(e) {

  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    onGameStart: () => dispatch(gameStart()),
    onGamePause: () => dispatch(gamePause),
    onGameResume: () => dispatch(gameResume()),
    onMoveLeft: () => dispatch(moveLeft()),
    onMoveRight: () => dispatch(moveRight()),
    onRotate: () => dispatch(rotate()),
    onEnableAccelerate: () => dispatch(enableAccelerate()),
    onDisableAccelerate: () => dispatch(disableAccelerate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
