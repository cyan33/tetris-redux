import React, { Component } from 'react'

import WellGrid from './WellGrid'
import Tetromino from './Tetromino'

import './styles/Well.css'

export default class Well extends Component {
  render() {
    return (
      <div className="well-container">
        <WellGrid />
        {/*<Tetromino />*/}
      </div>
    )
  }
}
