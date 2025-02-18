import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { BsBoxSeam, BsCheckCircle } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import './Servicefeatures.css';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FiPhoneCall />,
      title: '24/7 Customer Service',
      text: "We're here to help you with any questions or concerns you have, 24/7.",
    },
    {
      icon: <BsBoxSeam />,
      title: 'Customer-Driven',
      text: 'Continuous improvements based on real customer insights and evolving preferences.',
    },
    {
      icon: <BsCheckCircle />,
      title: 'Our Guarantee',
      text: 'We stand behind our products and services and guarantee your satisfaction.',
    },
    {
      icon: <FaShippingFast />,
      title: 'Shipping Worldwide',
      text: 'We ship our products worldwide, making them accessible to customers everywhere.',
    },
  ];

  return (
    <Container className="service-features my-5">
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="text-center feature-item">
            <div className="icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceFeatures;
