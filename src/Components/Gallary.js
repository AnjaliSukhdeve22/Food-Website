import React from 'react';
import '../style/Gallery.css';

import pasta from '../assets/pasta.png';
import tandoori from '../assets/tandoori.png';
import chocolate from '../assets/Chocolate.png';
import Vegbiryani from '../assets/vegbiryani.png';
import juice from '../assets/juice.png';
import sadwitch from '../assets/GarlicSandwitch.png'

// You need to import all local images if you want to use them reliably in `src`
const images = [
  {
    src: pasta,
    description: 'Delicious Pasta',
    price: '₹199',
    rating: 4.5,
  },
  {
    src: tandoori,
    description: 'Tandoori Platter',
    price: '₹349',
    rating: 4.8,
  },
  {
    src: chocolate,
    description: 'Chocolate Dessert',
    price: '₹149',
    rating: 4.2,
  },
  {
    src: sadwitch,
    description: 'Grilled Sandwich',
    price: '₹129',
    rating: 4.3,
  },
  {
    src:juice,
    description: 'Fresh Juice',
    price: '₹99',
    rating: 4.7,
  },
  {
    src:Vegbiryani,
    description: 'Veg Biryani',
    price: '₹179',
    rating: 4.6,
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.src} alt={item.description} />
            <div className="card-info">
              <h3>{item.description}</h3>
              <p className="price">{item.price}</p>
              <p className="rating">⭐⭐⭐⭐ {item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
