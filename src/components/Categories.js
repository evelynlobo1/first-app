import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Categories.css";

const Categories = () => {
    const products = [
      {
        name: 'Herbal Tea',
        image: './assets/tea_category.png',
      },
      {
        name: 'Organic Powder',
        image: './assets/powder_category.png',
      },
    ];
  
    return (
        <div className="container text-center my-5">
          <div className="row justify-content-center">
            {products.map((product, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card overflow-hidden border-0 shadow-sm" style={{ width: '350px', height: '466px', borderRadius: '12px' }}>
                  <div className="position-relative" style={{ width: '100%', height: '100%' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top img-fluid transition-transform"
                      style={{ transition: 'transform 0.5s', objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <button
                      className="custom-button-original position-absolute bottom-0 start-50 translate-middle-x mb-3"
                    >
                      {product.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  };

  export default Categories;