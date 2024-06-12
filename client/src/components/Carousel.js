import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Carousel.css'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
    };

    return (
        <Slider {...settings} className="carousel">
            <div><img src="/image1.jpeg" alt="Image 1" /></div>
            <div><img src="/image2.jpeg" alt="Image 2" /></div>
            <div><img src="/image3.jpeg" alt="Image 3" /></div>
        </Slider>
    );
};

export default Carousel;