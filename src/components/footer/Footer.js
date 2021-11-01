import React from 'react'
import "./footer.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LogoAbout from "../../assets/logoAbout.png"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer-container">
            <div className="icons-wrapper">
                <div className="follow-us">
                    Seguici su
                    <div className="social-icons">
                        <a href="https://www.facebook.com/Laboratorio-Creativo-Artistico-106594717366516/" aria-label="facebook" target="_blank" rel="noreferrer"><FacebookIcon style={{ fontSize: 35 }} /></a>
                        <a href="https://instagram.com/laboratorio_creativo_art?igshid=1s8t9r77esaqu" aria-label="instagram" target="_blank" rel="noreferrer"><InstagramIcon style={{ fontSize: 35 }} /></a>
                    </div>
                </div>
                <div className="contacts">
                    Contattaci
                    <div className="social-icons">
                        <a href="https://api.whatsapp.com/send?phone=393311654417" aria-label="whatsapp" target="_blank" rel="noreferrer"><WhatsAppIcon style={{ fontSize: 35 }} /></a>
                        <a href="mailto: laboratoriocreativo.custom@gmail.com" aria-label="email"><MailOutlineIcon style={{ fontSize: 35 }} /></a>
                    </div>
                </div>
                <div className="about">
                    Chi siamo
                    <div className="social-icons chiSiamo">
                        <Link to="/chi-siamo"><img className="footer-icons logoAbout" src={LogoAbout} alt="logo" /></Link>
                    </div>
                </div>
            </div>
            <p className="madeBy">&copy; 2021 Laboratorio Creativo | by Raffaele Di Martino</p>
        </div>
    )
}

export default Footer
