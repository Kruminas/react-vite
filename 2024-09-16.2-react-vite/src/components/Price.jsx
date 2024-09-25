import React from 'react';

const Price = ({ Price }) => {
  return (
    <div className="rating-container">
      <p style={{fontSize: '26px'}}>Price: {Price.price} $</p>
    </div>
  );
}

export default Price;
