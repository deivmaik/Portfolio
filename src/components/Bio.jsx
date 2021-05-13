import React, { Fragment } from 'react'
import github from '../img/icons/github.svg'
import behance from '../img/icons/behance.svg'
import linkedIn from '../img/icons/linkedin.svg'
import archinect from '../img/icons/archinect.svg'
import '../styles/components/bio.scss'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


function Bio({
  intro,
  name,
  desc,
  onHover
}) {
  return (
    <div className="bio ">
      <h1 className="bio__intro ">{intro}</h1>
      <h1 className="bio__name ">{name}</h1>
      <p className="bio__desc">{desc}</p>
      <div className="bio__social">
        
        <div
          onMouseEnter={() => onHover('linkedin') }
        >
          <a onClick={() => openInNewTab('https://www.linkedin.com/in/michaelbiz/')} >
            <img className="linkedIn" src={linkedIn} alt="linkedIn" />
          </a>
        </div>

        <div onMouseEnter={() => onHover('archinect') }
        >
         <a onClick={() => openInNewTab('https://archinect.com/michaeljuarez')}>
          <img className="archinect" src={archinect} alt="archinect" />
         </a>
        </div>

        <div onMouseEnter={() => onHover('behance') }
        >
          <a onClick={() => openInNewTab('https://www.behance.net/deivmaik')} >
            <img className="behance" src={behance} alt="behance" />
          </a>
        </div>

        <div
          onMouseEnter={() => onHover('github') }
        >
          <a onClick={() => openInNewTab('https://github.com/deivmaik')} >
            <img className="github" src={github} alt="github" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Bio