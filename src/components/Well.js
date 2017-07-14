import React, { Component } from 'react'

import WellGrid from './WellGrid'
import Tetromino from './Tetromino'

export default class Well extends Component {
  render() {
    return (
      <div>
        <WellGrid />
        <Tetromino />
      </div>
    )
  }
}
