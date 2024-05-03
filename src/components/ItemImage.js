// ItemImage.js
import React from 'react';

const ItemImage = ({ imageUrl, onItemClick }) => {
  const handleClick = () => {
    onItemClick(imageUrl);
  };

  return (
    <div className="item-image" onClick={handleClick}>
      <img src={imageUrl} alt="Item" />
    </div>
  );
};

export default ItemImage;
