import React from 'react'
import me from '../img/me.png'
import '../styles/components/me.scss'


function Me({
  photo
}) {
  return (
    <div className="hero__photo">
      <img src={me} alt="photo" />
    </div>
  )
}

export default Me
