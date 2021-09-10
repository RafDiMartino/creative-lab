import React, { useState } from 'react'
import PageHeader from '../components/page-header/PageHeader'
import Description from '../components/page-description/Description'
import WhatsApp from "../components/whatsapp-button/WhatsApp"
import "../styles/candle.css"
import ImgGridCandele from '../components/image-grid/ImgGridCandele'
import Modal from '../components/modal/Modal'


function Candle() {

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <div>
            <div className="candle-container">
                <PageHeader
                    title="Candele"
                    catchLine="Per personalizzare le tue candele contattami su WhatsApp"
                />
                <WhatsApp />
                <Description 
                    line1="Le candele personalizzate vengono pensate come oggetti d’arredo o come alternativa alle classiche bomboniere per cerimonie."
                    line2="Si prestano molto bene come oggetto originale da regalare in occasioni o eventi particolari come: nuova nascita, San Valentino, Compleanni, Cerimonie religiose (battesimo, matrimonio, comunione), in quanto sono completamente personalizzabili nel disegno, nei colori e nei decori di strass, nastrini in raso o in pizzo."
                    line3="Per fornire il massimo della personalizzazione, il Laboratorio Creativo propone gratuitamente anche la progettazione e lo sviluppo in grafica digitale di disegni particolari (ad esempio realizzare il disegno con le sembianze delle persone che riceveranno la candela decorata)."
                    line4="Inoltre è possibile realizzare la candela anche con stampa fotografica."
                    line5="Le candele sono disponibili in 4 formati:"
                    line6="- Piccolo (altezza 8cm, diametro 5.5cm)"
                    line7="- Medio (altezza 10cm, diametro 6.6cm)"
                    line8="- Grande (altezza 15cm, diametro 6.6cm / altezza 20cm, diametro 7.6cm)"
                    line9="- Maxi (altezza 29cm, diametro 8.5cm)"
                />
            </div>
            <ImgGridCandele setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    )
}

export default Candle
