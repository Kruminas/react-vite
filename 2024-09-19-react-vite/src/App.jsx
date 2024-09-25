import React, { useState } from 'react';
import './App.css';

const produktai = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

function List() {
  const [inputValue, setInputValue] = useState('');
  const [showList, setShowList] = useState(false);

  const handleInputClick = () => {
    setShowList(true);
  }
  const handleItemClick = (item) => {
    setInputValue(item);
    setShowList(false)
  }
  const handleButtonClick = () => {
    console.log(inputValue)
  }

  return (
    <>
    <input className='paieska' placeholder='Ivesti paieska' value={inputValue} onClick={handleInputClick} onChange={(e) => setInputValue(e.target.value)}/>
    <button className='migtukas' onClick={handleButtonClick}>Prideti</button>
    <div className='produktai'>
    {showList && (
      <ul>
        {produktai.map((product, index) => (
          <li key={index} onClick={() => handleItemClick(product)}>{product}</li>
        ))}
      </ul>
    )}
    </div>
    </>
  );
 }
export default List;