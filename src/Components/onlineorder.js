import React, { useState } from 'react';
import ToggleOrderType from './ToggleOrderType';
import CategoryTabs from './CategoryTabs';
import FoodItemCard from './FoodItemCard';
import '../style/Onlineorder.css';
import pasta from '../assets/pasta.png';
import Sandwitch from '../assets/GarlicSandwitch.png'
const data = {
  Pasta: [
    { name: 'white souce pasta', price: '₹120', src: {pasta} },
    { name: 'Sweet Corn pasta ', price: '₹130', src:{pasta} }
  ],
  Sandwitch: [
    { name: 'Veg Sandwitch', price: '₹150', image: '../assets/GarlicSandwitch.png' },
    { name: 'GarlicSadwitch', price: '₹170', image: '../assets/GarlicSandwitch.png' }
  ],
  Noodles: [
    { name: 'Hakka Noodles', price: '₹180', image: '/images/noodle.jpg' },
    { name: 'Schezwan Noodles', price: '₹200', image: '/images/noodle2.jpg' }
  ]
};

const OnlineOrder = () => {
  const [orderType, setOrderType] = useState('Pickup');
  const [category, setCategory] = useState('Pasta');

  return (
    <div className="order-page">
      <h1>Order Online</h1>
      <ToggleOrderType selected={orderType} onSelect={setOrderType} />

      <div className="pickup-info">
        {orderType === 'Pickup' ? (
          <p>Pickup from: 123 Spice Street | Time: 30 min</p>
        ) : (
          <p>Delivery to: Your address | Time: 45-60 min</p>
        )}
      </div>

      <CategoryTabs
        categories={Object.keys(data)}
        selected={category}
        onSelect={setCategory}
      />

      <div className="food-grid">
        {data[category].map((item, idx) => (
          <FoodItemCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OnlineOrder;
