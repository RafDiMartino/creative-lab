import React, { useState } from 'react'
import "./description.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Description({line1, line2, line3, line4, line5, line6, line7, line8, line9}) {

    const [expandMenu, setExpandMenu] = useState(true)

    const toogleExpand = () => {
        setExpandMenu(!expandMenu)
    }

    return (
        <div className="description-wrapper">
            <div className={expandMenu ? "descriptioff" : "description"}>
                <p>{line1}</p>
                <p>{line2}</p>
                <p>{line3}</p>
                <p>{line4}</p>
                <p>{line5}</p>
                <p>{line6}</p>
                <p>{line7}</p>
                <p>{line8}</p>
                <p>{line9}</p>
            </div>
            <button onClick={toogleExpand} className="btn-expand" aria-label="expand menu">
                {expandMenu ? "Espandi" : "Restringi"}
                {expandMenu ? <ExpandMoreIcon /> : <ExpandLessIcon /> }
            </button>
        </div>
    )
}

export default Description
