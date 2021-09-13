import React, {useState} from 'react'
import PageHeader from '../components/page-header/PageHeader'
import Description from '../components/page-description/Description'
import WhatsApp from "../components/whatsapp-button/WhatsApp"
import "../styles/pages.scss"
import ImgGridPhotobook from '../components/image-grid/ImgGridPhotobook'
import Modal from '../components/modal/Modal'

function PhotoBook() {

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <div>
            <div className="photo-book-container">
                <PageHeader
                    title="Servizio Fotografico"
                    catchLine="Per prenotare il servizio fotografico contattami su WhatsApp"
                />
                <WhatsApp />
                <Description
                    line1="Un interessante servizio che offre il Laboratorio Creativo è il servizio fotografico con fotolibro. Per immortalare i vostri eventi come compleanni e cerimonie religiose (battesimi, comunioni)."
                    line2="Il servizio fotografico si svolge in tre fasi:"
                    line3="1° Step – Presenza sul luogo per scatti fotografici senza limiti da inizio a fine cerimonia"
                    line4="2° Step – Fotoritocco delle foto scelte e a seguire fotomontaggio e grafica fotolibro"
                    line5="3° Step – Realizzazione del fotolibro in termini di stampa I tempi di attesa per il servizio fotografico possono variare dai 20 ai 30 giorni lavorativi."
                />
            </div>
            <ImgGridPhotobook setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    )
}

export default PhotoBook
