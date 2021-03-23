import React from 'react'
import '../styles/components/desc.scss'

function Desc({
    title,
  }) {
    return (
        <div className="desc hide-for-mobile">
            <h4 className="desc__title">{title}</h4>
            <ul className="desc__list-container">
                <li className="desc__list-item">Born in “Buenos Aires -Argentina”</li>
                <li className="desc__list-item">28 years old</li>
                <li className="desc__list-item">Licensed Architect</li>
                <li className="desc__list-item">Self taught programmer & designer</li>
            </ul>
            <p className="desc__footer">
            Feel free to contact me on LinkedIn !
            </p>
            

        </div>
    )
}

export default Desc
