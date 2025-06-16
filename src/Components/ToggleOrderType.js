import React from 'react';

const ToggleOrderType = ({ selected, onSelect }) => {
  return (
    <div className="toggle-buttons">
      <button
        className={selected === 'Pickup' ? 'active' : ''}
        onClick={() => onSelect('Pickup')}
      >
        Pickup
      </button>
      <button
        className={selected === 'Delivery' ? 'active' : ''}
        onClick={() => onSelect('Delivery')}
      >
        Delivery
      </button>
    </div>
  );
};

export default ToggleOrderType;
