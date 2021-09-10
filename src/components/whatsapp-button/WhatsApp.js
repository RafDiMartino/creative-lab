import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import "./whatsapp.css"

function WhatsApp() {
    return (
        <div className="whatsapp-wrapper">
            <div className="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=393311654417" aria-label="whatsapp" target="_blank" rel="noreferrer"><WhatsAppIcon style={{ fontSize: 35, color: '#64dd17' }} /></a>
            </div>
        </div>
    )
}

export default WhatsApp
