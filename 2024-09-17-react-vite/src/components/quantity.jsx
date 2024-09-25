import React, { useState } from "react";

const Migtukai = () => {
  const [qty, setQty] = useState(0);

  const daugiau = () => {
    if (qty < 100) {
      setQty(qty + 1);
    }
  };

  const maziau = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <>
    <h1 style={{color: 'black', paddingBottom: '45px'}}>Quantity</h1>
      <button onClick={maziau} style={{marginRight: '15px'}}>-</button>
      <input style={{textAlign: 'center', fontSize: '18px'}} placeholder="Skaičiuku skaičiukai"/>
      <button onClick={daugiau} style={{marginLeft: '15px'}}>+</button>
      <p style={{position: 'relative', top: '50px', fontSize: '25px'}}>Skaičius: {qty}</p>
    </>
  );
};

export default Migtukai;