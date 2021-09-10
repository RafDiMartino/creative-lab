import WhatsApp from '../components/whatsapp-button/WhatsApp'
import React, {useState} from 'react'
import PageHeader from '../components/page-header/PageHeader'
import "../styles/ideas.css"
import ImgGridIdea from '../components/image-grid/ImgGridIdea'
import Modal from '../components/modal/Modal'

function Ideas() {

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <div>
            <div className="ideas-container">
                <PageHeader
                    title="Spazio Idea"
                    catchLine="In questa particolare sezione sono raccolte tutte le idee dei clienti che, con il nostro aiuto sono diventate possibili, perché il Laboratorio Creativo non offre sogni, ma solide realtà!"
                />
                <WhatsApp />
                <br />
            </div>
            <ImgGridIdea setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    )
}

export default Ideas
