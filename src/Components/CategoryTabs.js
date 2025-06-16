import React from 'react';

const CategoryTabs = ({ categories, selected, onSelect }) => {
  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? 'active-tab' : ''}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
