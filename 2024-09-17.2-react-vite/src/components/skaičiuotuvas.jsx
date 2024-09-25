import React, { useState } from 'react';

const Skaiciuotuvas = () => {
    const [display, setDisplay] = useState('');
    const [prevValue, setPrevValue] = useState(null);
    const [operation, setOperation] = useState(null);

    const handleInput = (value) => setDisplay(display + value);

    const handleOperation = (op) => {
        setPrevValue(parseFloat(display));
        setDisplay('');
        setOperation(op);
    };

    const calculateResult = () => {
        if (prevValue === null || display === '') return;
        const currentValue = parseFloat(display);
        let result;

        switch (operation) {
            case '+': result = prevValue + currentValue; break;
            case '-': result = prevValue - currentValue; break;
            case '*': result = prevValue * currentValue; break;
            case '/': result = currentValue === 0 ? 'Error' : prevValue / currentValue; break;
            default: return;
        }

        setDisplay(String(result));
        setPrevValue(null);
        setOperation(null);
    };

    const reset = () => {
        setDisplay('');
        setPrevValue(null);
        setOperation(null);
    };

    return (
        <div>
            <p>Rezultatas: {display || '0'}</p>
            <div>
                {[0,1,2,3,4,5,6,7,8,9].map(num => (
                    <button key={num} onClick={() => handleInput(num)}>{num}</button>
                ))}
                <button onClick={() => handleInput('.')}>.</button>
            </div>
            <div>
                {['+', '-', '*', '/'].map(op => (
                    <button key={op} onClick={() => handleOperation(op)}>{op}</button>
                ))}
                <button onClick={calculateResult}>=</button>
                <button onClick={reset}>C</button>
            </div>
        </div>
    );
};

export default Skaiciuotuvas;
