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
            <div >
                <div className="square code__one">
                    <div className="square__image postman"></div>
                </div>
                <div className="square code__two">
                    <div className="square__image mysql"></div>
                </div>
                <div className="square code__three">
                    <div className="square__image typescript"></div>
                </div>
                <div className="square code__four">
                    <div className="square__image aws"></div>
                </div>

                <div className="square code__fifth">
                    <div className="square__image html"></div>
                </div>
                <div className="square code__sixth">
                    <div className="square__image sass"></div>
                </div>
                <div className="square code__seventh">
                    <div className="square__image javascript"></div>
                </div>
                <div className="square code__eighth">
                    <div className="square__image react"></div>
                </div>
            </div>
        </div>
    )
}

export default Desc
