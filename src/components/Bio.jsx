import React, { Fragment } from 'react'
import github from '../img/icons/github.svg'
import behance from '../img/icons/behance.svg'
import linkedIn from '../img/icons/linkedin.svg'
import archinect from '../img/icons/archinect.svg'
import '../styles/components/Bio.scss'

function Bio() {
  return (
    <div className="main container">
      <h1 className="main__intro ">Hi! I am</h1>
      <h1 className="main__name ">Michael Juarez</h1>
      <p className="main__desc">Developer, Designer, Architect.</p>
      <div className="main__social">
        <div>
          <img className="github" src={github} alt="github" />
        </div>

        <div>
          <img className="behance" src={behance} alt="behance" />
        </div>

        <div>
          <img className="linkedIn" src={linkedIn} alt="linkedIn" />
        </div>

        <div>
          <img className="archinect" src={archinect} alt="archinect" />
        </div>
      </div>
    </div>
  )
}

export default Bio
