import React from 'react'
import me from '../img/me.png'
import '../styles/components/Me.scss'

function Me() {
  return (
    <div className="main__photo">
      <img src={me} alt="photo" />
    </div>
  )
}

export default Me
