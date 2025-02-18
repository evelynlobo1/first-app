import React, { useState } from 'react';
import { Container, Col, Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import './Whatsnew.css'; // Ensure this is the correct CSS file

const WhatsNewSection = () => {
  const [activeCategory, setActiveCategory] = useState('powder');

  const powderProducts = [
    { name: 'Buds & Roots Turmeric Organic Powder', image: './assets/powder1.png' },
    { name: 'Buds & Roots Spirulina Organic Powder', image: './assets/powder2.png' },
    { name: 'Buds & Roots Shikakai Organic Powder', image: './assets/powder3.png' },
    { name: 'Buds & Roots Shatavari Root Organic Powder', image: './assets/powder4.png' },
    { name: 'Buds & Roots Senna Leaf Organic Powder', image: './assets/powder5.png' },
    { name: 'Buds & Roots Punarnava Organic Powder', image: './assets/powder6.png' },
  ];

  const teaProducts = [
    { name: 'Buds & Roots Turmeric + Ginger Herbal Tea', image: './assets/tea1.png' },
    { name: 'Buds & Roots Lemon + Ginger Herbal Tea', image: './assets/tea2.png' },
    { name: 'Buds & Roots Soursop Leaf Herbal Tea', image: './assets/tea3.png' },
    { name: 'Buds & Roots Shilajit Herbal Tea', image: './assets/tea4.png' },
    { name: 'Buds & Roots Tulsi & Peppermint Herbal Tea', image: './assets/tea5.png' },
    { name: 'Buds & Roots Turmeric + Ginger Herbal Tea', image: './assets/tea1.png' },
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Helper to split the products array into chunks of 3
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const renderCards = (products) => {
    // Split products into slides (3 per slide)
    const slides = chunkArray(products, 3);

    return (
      <div className="carousel-wrapper" style={{ margin: '0 10px' }}>
        <Carousel 
          interval={null} 
          indicators={false} 
          controls={true} 
          className="hover-controls"
        >
          {slides.map((slideProducts, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              {/* Use a custom class "cards-row" to force a gap between columns */}
              <Row className="mt-4 justify-content-center cards-row">
                {slideProducts.map((product, index) => (
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                    className="d-flex justify-content-center"
                    key={index}
                  >
                    <div className="product-card">
                      <div className="image-container">
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.name}
                        />
                        <div className="hover-buttons">
                          <button className="hover-btn">QUICK VIEW</button>
                          <button className="hover-btn">READ MORE</button>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <Container className="my-5 text-center whatsnew-container">
      <h2 className="mb-4">What’s New</h2>
      <div className="toggle-links-container">
        <a
          href="#"
          className={`toggle-link ${activeCategory === 'powder' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleCategoryChange('powder');
          }}
        >
          ORGANIC POWDERS
        </a>
        <a
          href="#"
          className={`toggle-link ${activeCategory === 'tea' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleCategoryChange('tea');
          }}
        >
          HERBAL TEAS
        </a>
      </div>
      {activeCategory === 'powder' && renderCards(powderProducts)}
      {activeCategory === 'tea' && renderCards(teaProducts)}
    </Container>
  );
};

export default WhatsNewSection;
