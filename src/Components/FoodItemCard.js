import React from 'react';

const FoodItemCard = ({ name, price, image }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default FoodItemCard;
