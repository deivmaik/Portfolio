import React from 'react'
import '../styles/components/desc.scss'

function Desc({
    title,
    first,
    second,
    third,
    forth,
    last
  }) {
    return (
        <div className="desc hide-for-mobile">
            <h4 className="desc__title">{title}</h4>
            <ul className="desc__list-container">
                <li className="desc__list-item">{first}</li>
                <li className="desc__list-item">{second}</li>
                <li className="desc__list-item">{third}</li>
                <li className="desc__list-item">{forth}</li>
            </ul>
            <p className="desc__footer">
            {last}
            </p>
            

        </div>
    )
}

export default Desc
