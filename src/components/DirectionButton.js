import React from 'react'

const DirectionButton = ({
  direction,
  onClickHandler,
  onMouseDownHandler,
  onMouseUpHandler
}) => (
  <div className="direction-buttons">
    {direction === 'up' && 
      <button className="d-btn" onClick={onClickHandler}>
        <i className="fa fa-repeat" aria-hidden="true"></i>
      </button>
    }
    {direction === 'left' &&
      <button className="d-btn" onClick={onClickHandler}>
        <i className="fa fa-caret-left" aria-hidden="true"></i>
      </button>
    }
    {direction === 'down' &&
      <button className="d-btn" onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler}>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </button>
    }
    {direction === 'right' &&
      <button className="d-btn" onClick={onClickHandler}>
        <i className="fa fa-caret-right" aria-hidden="true"></i>
      </button>
    }
  </div>
)

export default DirectionButton

