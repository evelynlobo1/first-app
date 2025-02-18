import React from 'react';
import './Box.css';

const ZoomImageComponent = () => {
  // Replace these URLs with your own images
  const images = [
    './assets/box1.png',
    './assets/box2.png',
  ];

  return (
    <div className="image-container">
      {images.map((src, index) => (
        <div className="image-wrapper" key={index}>
          <img src={src} alt={`Zoomable ${index + 1}`} className="zoom-image" />
        </div>
      ))}
    </div>
  );
};

export default ZoomImageComponent;
