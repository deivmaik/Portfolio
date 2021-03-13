import React from 'react'
import github from '../img/icons/github.svg'
import behance from '../img/icons/behance.svg'
import linkedin from '../img/icons/linkedin.svg'


function Bio() {
    return (
        <div>
            <h1>Hi! I am Michael Juarez</h1>
            <p>Developer, Designer, Architect.</p>
            <>
                <div>
                    <img src={github} alt="photo"/>
                </div>

                <div>
                    <img src={behance} alt="photo"/>
                </div>

                <div>
                    <img src={linkedin} alt="photo"/>
                </div>
            </>
        </div>
    )
}

export default Bio
