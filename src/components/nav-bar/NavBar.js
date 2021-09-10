import React, { useState } from 'react'
import "./navbar.css"
import Logo from "../../assets/100h.png"
import Shoe from "../../assets/sneakers.png"
import Candle from "../../assets/candle.png"
import CentroTavola from "../../assets/centrotavola.png"
import Camera from "../../assets/camera.png"
import Home from "../../assets/home.png"
import GiftBox from "../../assets/giftbox.png"
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



function NavBar2() {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav>
            <div className="left-side" id={openMenu ? "open" : "close"}>
                <Link to="/"><img className="logo-nav" src={Logo} alt="logo" /></Link>
                <div className="nav-links" >
                    <Link to="/"><img className="nav-icon home" src={Home} alt="shoe" /></Link>
                    <Link to="/scarpe"><img className="nav-icon shoe" src={Shoe} alt="shoe" /></Link>
                    <Link to="/candele"><img className="nav-icon" src={Candle} alt="candle" /></Link>
                    <Link to="/speciale-natale"><img className="nav-icon" src={CentroTavola} alt="candle" /></Link>
                    <Link to="/servizio-fotografico"><img className="nav-icon" src={Camera} alt="candle" /></Link>
                    <Link to="/spazio-idea"><img className="nav-icon giftbox" src={GiftBox} alt="candle" /></Link>
                </div>
            </div>
            <button className="nav-btn" onClick={toggleMenu} aria-label="menu">
                {!openMenu ? <MenuIcon style={{fontSize: 30}} /> : <CloseIcon style={{fontSize: 30}} />}
            </button>
        </nav>
    )
}

export default NavBar2
