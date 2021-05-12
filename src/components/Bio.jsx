import React, { Fragment } from 'react'
import github from '../img/icons/github.svg'
import behance from '../img/icons/behance.svg'
import linkedIn from '../img/icons/linkedin.svg'
import archinect from '../img/icons/archinect.svg'
import '../styles/components/bio.scss'


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
          <a href="https://www.linkedin.com/in/michaelbiz/">
            <img className="linkedIn" src={linkedIn} alt="linkedIn" />
          </a>
        </div>

        <div onMouseEnter={() => onHover('archinect') }
        >
         <a href="https://archinect.com/michaeljuarez">
          <img className="archinect" src={archinect} alt="archinect" />
         </a>
        </div>

        <div onMouseEnter={() => onHover('behance') }
        >
          <a href="https://www.behance.net/deivmaik">
            <img className="behance" src={behance} alt="behance" />
          </a>
        </div>

        <div
          onMouseEnter={() => onHover('github') }
        >
          <a href="https://github.com/deivmaik">
            <img className="github" src={github} alt="github" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Bio