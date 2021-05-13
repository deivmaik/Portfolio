import React, { useState } from 'react'
import Bio from '../components/Bio'
import Desc from '../components/Desc'
import Me from '../components/Me'
import '../styles/containers/hero.scss'
import { bioObj, descriptions } from './data/Data'

function Hero() {

  const [descShowing, setDescShowing] = useState(descriptions.descMain);

  const handleHover = (newDesc) => {
    setDescShowing(descriptions[newDesc])
  }

  return (
    <div className="main__layout container">
      <div className="main__info">
      <Bio {...bioObj} onHover={handleHover} />
      </div>
      <Desc {...descShowing}/>
      <Me />
    </div>
  )
}

export default Hero