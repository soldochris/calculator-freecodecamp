import React from 'react';
import "../styles/ClearButton.css"

const ClearButton = ({ children }) => {
  return (
    <div className='clear-button'>
      {children}
    </div>
  )
}

export default ClearButton