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
          onMouseEnter={() => onHover('github') }
        >
          <img className="github" src={github} alt="github" />
        </div>

        <div>
          <img className="behance" src={behance} alt="behance" />
        </div>

        <div>
          <img className="archinect" src={archinect} alt="archinect" />
        </div>

        <div
          onMouseEnter={() => onHover('linkedin') }
        >
          <img className="linkedIn" src={linkedIn} alt="linkedIn" />
        </div>

      </div>
    </div>
  )
}

export default Bio