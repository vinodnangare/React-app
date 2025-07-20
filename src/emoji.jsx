import React from 'react'
import './emoji.css'
import './style.css'
function Emoji({emojis,setEmoji1}) {

  return (
    <>
   
  <div className='elements' onClick={ ()=>setEmoji1(emojis)}>{emojis}</div>


    </>
  )
}

export default Emoji