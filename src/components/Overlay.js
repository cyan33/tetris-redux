import React from 'react'

const Overlay = ({ text }) => (
  <div className="overlay" dangerouslySetInnerHTML={{ __html: text }} />
)

export default Overlay
