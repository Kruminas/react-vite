import React from 'react';

const Title = ({ Title }) => {
  return (
    <div className="title-container">
      <h4 style={{fontSize: '28px'}}>{Title.title}</h4>
    </div>
  );
}

export default Title;
