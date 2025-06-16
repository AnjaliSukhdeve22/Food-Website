import React from 'react';
import '../style/Offers.css';

import special1 from '../assets/GarlicSandwitch.png';
import special2 from '../assets/tandoori.png';
import special3 from '../assets/Chocolate.png';

const offers = [
  {
    image: special1,
    title: 'Buy 1 Get 1 Free Garlic sandwitch',
    description: 'Enjoy our delicious Garlic sandwitch with an exciting Buy 1 Get 1 Free offer.',
    validTill: 'Valid till 30th June',
  },
  {
    image: special2,
    title: '20% Off on Tandoori Platter',
    description: 'Savor the taste of spicy Tandoori dishes at a special discount.',
    validTill: 'Offer valid all weekends',
  },
  {
    image: special3,
    title: 'Free Dessert on Order Above ₹499',
    description: 'Order above ₹499 and get a mouth-watering dessert for free!',
    validTill: 'Only on weekdays',
  },
];

const SpecialOffers = () => {
  return (
    <div className="offers-container">
      <h2 className="offers-title">🎉 Special Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.image} alt={offer.title} />
            <div className="offer-info">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <span className="validity">{offer.validTill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
