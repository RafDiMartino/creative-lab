import React from 'react'
import "./pageHeader.css"


function PageHeader({ title, catchLine, catchLine1}) {

    return (
        <div className="header-wrapper">
            <h1>{title}</h1>
            <div className="catch-line-container">
                <p>{catchLine}</p>
                <p>{catchLine1}</p>
            </div>
        </div>
    )
}

export default PageHeader
