import React from 'react';

const Images = ({ Image }) => {
  return (
    <div className="image-container">
      <img src={Image.thumbnail} alt={Image.title} style={{ width: '20%' }} />
    </div>
  );
}

export default Images;
