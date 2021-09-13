import React, {useState} from 'react'
import PageHeader from '../components/page-header/PageHeader'
import Description from '../components/page-description/Description'
import WhatsApp from "../components/whatsapp-button/WhatsApp"
import "../styles/pages.scss"
import ImgGridNatale from '../components/image-grid/ImgGridNatale';
import Modal from '../components/modal/Modal'

function ChristmasSpecial() {

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <div>
            <div className="christmas-container">
                <PageHeader
                    title="Speciale Natale"
                    catchLine="Per personalizzare i tuoi regali di Natale contattami su WhatsApp"
                />
                <WhatsApp />
                <Description 
                    line1="Nel periodo più magico dell’anno, quello del Santo Natale, il Laboratorio Creativo ha pensato bene di creare dei bellissimi centrotavola per addobbare le vostre tavole e rendere l’atmosfera natalizia ancora più magica (ottimi anche come idea regalo)."
                    line2="Come tutti i prodotti del Laboratorio Creativo, anche i centrotavola sono personalizzabili.
                    E’ possibile scegliere tra formato grande e piccolo e tra una vasta gamma di colori in tema natalizio, è possibile inoltre aggiungere un mini impianto di luci a intermittenza alimentato a batterie.
                    Oltre ai centrotavola, si può scegliere anche un portafoto in stile natalizio e oggetti d’arredo (ad esempio, finto camino)."
                />
            </div>
            <ImgGridNatale setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    )
}

export default ChristmasSpecial
