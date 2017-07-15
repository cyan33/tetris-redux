import React from 'react'

const DirectionButton = ({
  direction,
  onClickHandler,
  onMouseDownHandler,
  onMouseUpHandler
}) => (
  <div className="d-btn">
    {direction === 'up' && 
      <button onClick={onClickHandler}>
        <i className="fa fa-caret-up" aria-hidden="true"></i>
      </button>
    }
    {direction === 'left' &&
      <button onClick={onClickHandler}>
        <i className="fa fa-caret-left" aria-hidden="true"></i>
      </button>
    }
    {direction === 'down' &&
      <button onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler}>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </button>
    }
    {direction === 'right' &&
      <button onClick={onClickHandler}>
        <i className="fa fa-caret-right" aria-hidden="true"></i>
      </button>
    }
  </div>
)

export default DirectionButton

