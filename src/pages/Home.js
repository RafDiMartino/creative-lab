import React from 'react'
import Carousel from '../components/carousel/Carousel'
import "../styles/home.css"
import Section from "../components/home-page-section/Section"
import Shoes from "../assets/sezione-scarpe.jpg"
import Candles from "../assets/sezione-candele.jpg"
import Christmas from "../assets/speciale-natale.jpg"
import PhotoBook from "../assets/photo-book.jpg"
import Ideas from "../assets/spazio-idee.jpg"
import { Link } from 'react-router-dom'
import BlueStripe from "../assets/blue-section.jpg"
import VioletStripe from "../assets/violet-section.jpg"
import RedStripe from "../assets/red-section.jpg"
import YellowStripe from "../assets/yellow-section.jpg"
import GreenStripe from "../assets/green-section.jpg"


function Home() {
    return (
        <div className="home-wrapper">
            <Carousel />
            <iframe  width="560" height="315" src="https://www.youtube.com/embed/4Jat4wBBl-c" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div className="section-container">
                <Link to="/scarpe">
                    <Section 
                        imgUrl={Shoes}
                        title="Scarpe"
                        img={BlueStripe}
                    />
                </Link>
                <Link to="/candele">
                    <Section 
                        imgUrl={Candles}
                        title="Candele"
                        img={VioletStripe}
                    />
                </Link>
                <Link to="/speciale-natale">
                    <Section 
                        imgUrl={Christmas}
                        title="Speciale Natale"
                        img={RedStripe}
                    />
                </Link>
                <Link to="/servizio-fotografico">
                    <Section 
                        imgUrl={PhotoBook}
                        title="Servizio Fotografico"
                        img={YellowStripe}
                    />
                </Link>
                <Link to="/spazio-idea">
                    <Section 
                        imgUrl={Ideas}
                        title="Spazio Idea"
                        img={GreenStripe}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Home
