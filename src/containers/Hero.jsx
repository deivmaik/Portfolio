import React, { Fragment } from 'react'
import Bio from '../components/Bio'
import Me from '../components/Me'
import '../styles/containers/Hero.scss'
import { bioObj } from './data/Data'

function Hero() {
  return (
    <div className="main__layout container">
      <Bio {...bioObj} />
      <Me />
    </div>
  )
}

export default Hero
