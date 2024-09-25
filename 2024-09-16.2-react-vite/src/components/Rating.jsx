import React from 'react';

const Rating = ({ Rating }) => {
  return (
    <div className="rating-container">
      <p style={{fontSize: '26px', }}>Rating: {Rating.rating} ⭐ </p>
    </div>
  );
}

export default Rating;
