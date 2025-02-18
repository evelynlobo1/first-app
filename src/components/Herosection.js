import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Herosection.css';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      heading: 'Welcome to Our World',
      paragraph: 'Discover amazing products and experiences designed just for you.',
      image: './assets/slider image1.jpg',
    },
    {
      id: 2,
      heading: 'Experience Quality',
      paragraph: 'Our offerings are crafted with care to elevate your lifestyle.',
      image: './assets/slider image2.png',

    },
  ];

  return (
    <Carousel 
      controls 
      indicators 
      interval={4000}  /* Slide duration in ms, adjust as needed */
      pause="hover"    /* Carousel will pause on hover */
      fade            /* Optional fade effect between slides */
    >
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          {/* Full-width image */}
          <img
            className="d-block w-100 hero-image"
            src={slide.image}
            alt={slide.heading}
          />

          {/* Text Overlay */}
          <Carousel.Caption className="custom-caption text-start">
          <div className="caption-bg">
            <h2>{slide.heading}</h2>
            <p>{slide.paragraph}</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
