import React, { Component } from 'react'
import { connect } from 'react-redux'

import WellGrid from './WellGrid'
import Tetromino from './Tetromino'

import './styles/Well.css'

const shit = [[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, "#b04497", null, null, null, null],
[null, null, null, null, "#b04497", "#b04497", "#b04497", null, null, null],
[null, null, null, null, null, "#ed652f", null, null, null, null],
[null, null, null, "#ed652f", "#ed652f", "#ed652f", null, null, null, null]]

class Well extends Component {
  getWellGridProps() {

  }

  render() {
    const { grid } = this.props
    return (
      <div className="well-container">
        <WellGrid grid={ shit } />
        {/*<Tetromino />*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    grid: state.grid
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Well)
