import React from 'react'
import "./section.css"

function Section({imgUrl, title, img}) {
    return (
        <div className="section-wrapper">
            <div className="container">
                <img className="background-section" src={imgUrl} alt="section" />
                <div>
                    <img className="background-title" src={img} alt="section-background" />
                    <p className="title">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Section
