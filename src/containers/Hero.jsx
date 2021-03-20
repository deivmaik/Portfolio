import React, { Fragment } from 'react'
import Bio from '../components/bio'
import Desc from '../components/Desc'
import Me from '../components/Me'
import '../styles/containers/hero.scss'
import { bioObj } from './data/Data'

function Hero() {
  return (
    <div className="main__layout container">
      <div className="main__info">
      <Bio {...bioObj} />
      </div>
      <Desc/>
      <Me />
    </div>
  )
}

export default Hero
