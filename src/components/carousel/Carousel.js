import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "./carousel.css"
import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import ParallaxBackground from "../../assets/background2.jpg"

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
    return (
        <div className="carousel-wrapper">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div slot="container-start" className="background-img" style={{ backgroundImage: `url(${ParallaxBackground})` }} data-swiper-parallax="-30%"></div>
                <SwiperSlide><p>Entra nel mondo della personalizzazione, navigando le pagine di questo sito troverai tante idee per meravigliosi regali.</p></SwiperSlide>
                <SwiperSlide><p>Cammina con stile con meravigliose scarpe personalizzate, divertiti a giocare con svariati colori e infiniti temi che più ti rispecchiano.</p></SwiperSlide>
                <SwiperSlide><p>In occasione di un evento importante stupisci con un regalo alternativo personalizzato, come le candele in cera decorate a mano.</p></SwiperSlide>
                <SwiperSlide><p>A Natale decoriamo le vostre case con stupendi manufatti natalizi come centrotavola, portafoto e finti camini d'arredo.</p></SwiperSlide>
            </Swiper>   
        </div>
    )
}

export default Carousel
