import React from 'react'
import PageHeader from '../components/page-header/PageHeader'
import "../styles/about.css"


function About() {

    return (
        <div className="about-wrapper">
            <div className="about-container">
                <PageHeader
                    title="Chi siamo"
                    catchLine="Il Laboratorio Creativo nasce da una passione per l'arte della decorazione e dall'amore per il mondo dei colori, della manifattura e dell'artigianato. Dalla fusione di essi nasce questo servizio, per permettere a tutti di rendere reali le proprie idee e personalizzarle a proprio gusto e piacere. Ogni articolo del Laboratorio Creativo è pensato e realizzato con cura appositamente per ogni persona che voglia rendere unico il proprio oggetto o regalo..."
                    catchLine1="Date sfogo alla fantasia, a realizzare le vostre idee ci pensiamo noi!!!"
                />
            </div>
            <div className="map">
                <iframe title="my location" height="612" frameBorder="0" scrolling="no" marginHeight="5" marginWidth="5" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=612&amp;hl=en&amp;q=%20agrate%20brianza+()&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
    )
}

export default About
