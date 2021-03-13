import React, { Fragment } from 'react'
import github from '../img/icons/github.svg'
import behance from '../img/icons/behance.svg'
import linkedIn from '../img/icons/linkedin.svg'
import archinect from '../img/icons/archinect.svg'
import '../styles/components/Bio.scss'

function Bio({
  intro,
  name,
  desc,
}) {
  return (
    <div className="main ">
      <h1 className="main__intro ">{intro}</h1>
      <h1 className="main__name ">{name}</h1>
      <p className="main__desc">{desc}</p>
      <div className="main__social">
        <div>
          <img className="github" src={github} alt="github" />
        </div>

        <div>
          <img className="behance" src={behance} alt="behance" />
        </div>

        <div>
          <img className="archinect" src={archinect} alt="archinect" />
        </div>

        <div>
          <img className="linkedIn" src={linkedIn} alt="linkedIn" />
        </div>

      </div>
    </div>
  )
}

export default Bio
