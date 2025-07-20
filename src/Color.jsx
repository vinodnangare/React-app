import React from 'react'

function Color({colorSelected,setColor}) {
  return (
        <div 
      onClick={() => setColor(colorSelected)}
      style={{ 
        backgroundColor: colorSelected, 
         width: '50px', 
        height: '50px', 
        margin: '5px', 
        borderRadius: '5px', 
        cursor: 'pointer' 
       
      }}
    />
  )
}

export default Color