import React, {useState} from 'react'
import PageHeader from '../components/page-header/PageHeader'
import Description from '../components/page-description/Description'
import WhatsApp from "../components/whatsapp-button/WhatsApp"
import "../styles/shoes.css"
import ImgGridShoes from '../components/image-grid/ImgGridShoes'
import Modal from '../components/modal/Modal'


function Shoes() {

    const [selectedImg, setSelectedImg] = useState(null)

    return (        
        <div>
            <div className="shoes-container">
                <PageHeader
                    title="Scarpe"
                    catchLine="Per personalizzare le tue scarpe contattami su WhatsApp"
                />
                <WhatsApp />
                <Description
                    line1="La realizzazione delle scarpe decorate a mano consiste in 3 passaggi fondamentali:"
                    line2="1° Step – Sgrassatura : Consiste nella rimozione, con un apposito solvente, della vernice trasparente protettiva. Questa operazione serve a rendere la superficie della scarpa più porosa e quindi pronta a ricevere il colore, per
                    una resa più duratura."
                    line3="2° Step – Disegno e colorazione: Consiste nel disegno bozzato a matita e, a seguire, la colorazione con colori Angelus (marca leader nel settore della colorazione della pelle)."
                    line4="3° Step – Fissaggio e protezione: Consiste nell’applicare sottili strati di vernice (lucida/opaca) che serve a fissare il colore rendendolo più elastico e impermeabile (ma non completamente indelebile), infatti il trattamento
                    non garantisce massima resa con dei lavaggi aggressivi come quelli della lavatrice."
                    line5="Cura della scarpa:"
                    line6="Per la pulizia delle scarpe da polvere, fango e altri tipi di sporco, si consiglia di usare panni morbidi impregnati
                    con semplice acqua, senza usare detergenti aggressivi come gli sgrassatori, in quanto hanno una composizione chimica a base acida che può compromettere la resa della vernice lucida protettiva. Nel caso in cui si volessero utilizzare dei
                    detergenti, è consigliabile usare quelli neutri come il sapone liquido di Marsiglia per lavatrice."
                />
            </div>
            <ImgGridShoes setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    )
}

export default Shoes

