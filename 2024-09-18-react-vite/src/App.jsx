import React, { useState } from 'react';
import './App.css';

function Password() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0); 

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword); 
  };


  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  return (
    <>
      <h1 style={{ fontSize: '54.5px' }}>
        Need a password? Try the 1Password Strong <br /> Password Generator.
      </h1>
      <p style={{ fontSize: '24px' }}>Generate secure, random passwords to stay safe online.</p>
      <p style={{ textAlign: 'left', fontWeight: '700', fontSize: '22px' }}>Generated password:</p>

    
      <input style={{ backgroundColor: 'white', color: 'black', border: 'none', width: '1125px', height: '69px', borderRadius: '8px' }} 
      value={password}/>

      <div style={{ position: 'relative', marginTop: '30px', width: '1125px' }}>
        <input style={{ backgroundColor: '#0a253c', border: 'none', width: '100%', height: '69px', borderRadius: '8px', color: 'white' }}placeholder=''/>
        <h4 style={{ position: 'absolute', top: '0px', left: '20px' }}>Length</h4>

        <input type='number'value={length} onChange={handleLengthChange}
        style={{ position: 'absolute', width: '69px', height: '25px', top: '23px', left: '100px', backgroundColor: 'white', color: 'black' }}/>

        <button onClick={generatePassword} 
        style={{position: 'absolute',width: '500px',borderRadius: '20px', border: 'none',top: '10px',left: '600px',backgroundColor: 'blue',color: 'white',fontSize: '20px',}}>Generate
      </button>
      </div>
    </>
  );
}

export default Password;
