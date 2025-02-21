import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Container>
        {/* Compact Hero Section */}
        <Row className="align-items-start mt-3">
          <Col md={6} className="pe-lg-5">
            <h1 className="display-5 mb-3 about-title">
              The Journey Behind Buds & Roots
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat</p>
            <p>Curabitur accumsan, justo ut lacinia pharetra, metus lacus scelerisque metus, 
              vel suscipit ex libero ut turpis. Fusce gravida libero nec magna fermentum, at 
              vestibulum lacus pharetra. Nam pharetra, libero vel ultricies luctus, magna ex interdum elit, 
              nec auctor ligula eros a risus. Duis hendrerit dolor id nulla efficitur, 
              et vehicula mauris suscipit. In hac habitasse platea dictumst.</p>
          </Col>
          <Col md={6}>
            <img 
              src="/assets/cup1.png" 
              className="img-fluid rounded"
              style={{ maxHeight: '400px' }}
            />
          </Col>
        </Row>

        {/* Our Story Section */}
        <section className="my-4 py-3">
          <h2 className="text-center mb-4 section-title">Our Story</h2>
          <Row>
            
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
              Phasellus interdum eros at augue interdum, et sodales orci cursus. Sed convallis 
              massa sit amet neque facilisis, ut malesuada justo molestie. Donec efficitur, nisi id 
              efficitur venenatis, augue purus porttitor odio, ac egestas mi felis eu lorem. Integer at lorem orci. 
              Vestibulum vehicula turpis id est fringilla, at venenatis metus facilisis. Sed luctus felis ut purus tempus, 
              eget feugiat urna ullamcorper
              </p>
              <p>Curabitur accumsan, justo ut lacinia pharetra, metus lacus scelerisque metus, vel suscipit ex 
                libero ut turpis. Fusce gravida libero nec magna fermentum, at vestibulum lacus pharetra. 
                Nam pharetra, libero vel ultricies luctus, magna ex interdum elit, nec auctor ligula eros a risus. 
                Duis hendrerit dolor id nulla efficitur, et vehicula mauris suscipit. In hac habitasse platea 
                dictumst.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                Donec sodales sagittis neque, ut luctus magna condimentum id. Mauris eu justo in ex tincidunt 
                accumsan. Proin eget tortor libero. Duis ultricies, nisi a vehicula hendrerit,
                erat turpis convallis dui, eget suscipit libero enim non orci</p>
          </Row>
        </section>

        {/* Values Section */}
        <section className="values-section my-4 py-4 bg-light">
          <Container>
            <h2 className="text-center mb-4 section-title">Our Philosophy</h2>
            <Row>
              <Col md={4} className="mb-4">
                <div className="value-card p-4">
                  <h3>Innovation</h3>
                  <p className="text-muted">
                    Pushing boundaries with cutting-edge design solutions that challenge conventions.
                  </p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="value-card p-4">
                  <h3>Sustainability</h3>
                  <p className="text-muted">
                    Eco-conscious materials and energy-efficient designs at our core.
                  </p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="value-card p-4">
                  <h3>Craftsmanship</h3>
                  <p className="text-muted">
                    Meticulous attention to detail in every element we create.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Full-width Collective Image */}
        <div className="collective-image-container w-100 overflow-hidden">
          <img 
            src="/assets/why-buds.png" 
            alt="Our collective"
            className="w-100 h-100 object-fit-cover"
            style={{ height: '400px' }}
          />
        </div>
      </Container>
    </div>
  );
}

export default About;