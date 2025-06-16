import React from 'react';
import '../style/Starters.css'
const starters = [
  {
    name: 'Paneer Tikka',
    price: '₹180',
    image: '/images/paneer-tikka.jpg'
  },
  {
    name: 'Spring Rolls',
    price: '₹150',
    image: '/images/spring-roll.jpg'
  },
  {
    name: 'Cheese Balls',
    price: '₹170',
    image: '/images/cheese-balls.jpg'
  },
  {
    name: 'Hara Bhara Kabab',
    price: '₹160',
    image: '/images/hara-bhara.jpg'
  }
];

const StartersPage = () => {
  return (
    <div className="starter-page">
      <h2>Our Starters</h2>
      <div className="starter-grid">
        {starters.map((item, index) => (
          <div className="starter-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button>Add to card</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartersPage;
