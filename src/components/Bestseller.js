import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Bestseller.css'; // Custom styling

const Bestseller = () => {
  const [activeCategory, setActiveCategory] = useState('powder');

  // Expanded to 10 items per category
  const powderProducts = [
    { name: 'Buds & Roots Turmeric + Ginger Herbal Tea', image: './assets/bs1.png' },
    { name: 'Buds & Roots Flaxseed Powder', image: './assets/bs2.png' },
    { name: 'Buds & Roots Amla Powder', image: './assets/bs3.png' },
    { name: 'Buds & Roots Lemon + Ginger Herbal Tea', image: './assets/bs4.png' },
    { name: 'Buds & Roots Java Plum-Jamun Seed Organic Powder', image: './assets/bs5.png' },
    { name: 'Buds & Roots Indigo Powder', image: './assets/bs6.png' },
    { name: 'Buds & Roots Ashwagandha Organic Powder', image: './assets/bs7.png' },
    { name: 'Buds & Roots Soursop Leaf Herbal Tea', image: './assets/bs8.png' },
    { name: 'Buds & Roots Shilajit Herbal Tea', image: './assets/bs9.png' },
    { name: 'Buds & Roots Tulsi & Peppermint Herbal Tea', image: './assets/bs10.png' },
  ];

  const teaProducts = [
    { name: 'Buds & Roots Turmeric + Ginger Herbal Tea', image: './assets/bs1.png' },
    { name: 'Buds & Roots Flaxseed Powder', image: './assets/bs2.png' },
    { name: 'Buds & Roots Amla Powder', image: './assets/bs3.png' },
    { name: 'Buds & Roots Lemon + Ginger Herbal Tea', image: './assets/bs4.png' },
    { name: 'Buds & Roots Java Plum-Jamun Seed Organic Powder', image: './assets/bs5.png' },
    { name: 'Buds & Roots Indigo Powder', image: './assets/bs6.png' },
    { name: 'Buds & Roots Ashwagandha Organic Powder', image: './assets/bs7.png' },
    { name: 'Buds & Roots Soursop Leaf Herbal Tea', image: './assets/bs8.png'},
    { name: 'Buds & Roots Shilajit Herbal Tea', image: './assets/bs9.png'  },
    { name: 'Buds & Roots Tulsi & Peppermint Herbal Tea', image: './assets/bs10.png' },
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Render the carousel with two slides:
  // Slide 1: Top row = first 3 items, Bottom row = next 3 items.
  // Slide 2: Top row = next 2 items, Bottom row = next 2 items.
  const renderCarousel = (products) => {
    const slide1Top = products.slice(0, 3);
    const slide1Bottom = products.slice(3, 6);
    const slide2Top = products.slice(6, 8);
    const slide2Bottom = products.slice(8, 10);

    return (
      <div className="carousel-wrapper">
        <Carousel interval={null} indicators={false} controls={true} className="hover-controls">
          {/* Slide 1: Centered rows */}
          <Carousel.Item>
            <div className="grid-container mt-4">
              <div className="grid-row">
                {slide1Top.map((product, index) => (
                  <div className="product-card" key={`slide1-top-${index}`}>
                    <div className="image-container">
                      <img src={product.image} alt={product.name} />
                      <div className="hover-buttons">
                        <button className="hover-btn">QUICK VIEW</button>
                        <button className="hover-btn">READ MORE</button>
                      </div>
                    </div>
                    <h5 className="product-name">{product.name}</h5>
                  </div>
                ))}
              </div>
              <div className="grid-row">
                {slide1Bottom.map((product, index) => (
                  <div className="product-card" key={`slide1-bottom-${index}`}>
                    <div className="image-container">
                      <img src={product.image} alt={product.name} />
                      <div className="hover-buttons">
                        <button className="hover-btn">QUICK VIEW</button>
                        <button className="hover-btn">READ MORE</button>
                      </div>
                    </div>
                    <h5 className="product-name">{product.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 2: Left‑aligned rows */}
          <Carousel.Item>
            <div className="grid-container mt-4">
              <div className="grid-row left-align">
                {slide2Top.map((product, index) => (
                  <div className="product-card" key={`slide2-top-${index}`}>
                    <div className="image-container">
                      <img src={product.image} alt={product.name} />
                      <div className="hover-buttons">
                        <button className="hover-btn">QUICK VIEW</button>
                        <button className="hover-btn">READ MORE</button>
                      </div>
                    </div>
                    <h5 className="product-name">{product.name}</h5>
                  </div>
                ))}
              </div>
              <div className="grid-row left-align">
                {slide2Bottom.map((product, index) => (
                  <div className="product-card" key={`slide2-bottom-${index}`}>
                    <div className="image-container">
                      <img src={product.image} alt={product.name} />
                      <div className="hover-buttons">
                        <button className="hover-btn">QUICK VIEW</button>
                        <button className="hover-btn">READ MORE</button>
                      </div>
                    </div>
                    <h5 className="product-name">{product.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };

  return (
    <Container className="my-5 text-center bestseller-container">
      <div className="toggle-links-container">
        <a
          href="#"
          className={`toggle-link ${activeCategory === 'powder' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleCategoryChange('powder');
          }}
        >
          Best Seller
        </a>
        <a
          href="#"
          className={`toggle-link ${activeCategory === 'tea' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleCategoryChange('tea');
          }}
        >
          New Arrivals
        </a>
      </div>
      {activeCategory === 'powder' && renderCarousel(powderProducts)}
      {activeCategory === 'tea' && renderCarousel(teaProducts)}
    </Container>
  );
};

export default Bestseller;
