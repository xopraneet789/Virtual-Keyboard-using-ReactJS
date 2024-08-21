import React, { useState } from 'react';
import './Keyboard.css';

const Keyboard = ({ onKeyPress }) => {
  const [activeKey, setActiveKey] = useState(null);

  const letters = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const numbers = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  ];

  const specials = [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    ['-', '=', '+', '[', ']', '{', '}', '\\', ';'],
    [':', '"', ',', '.', '/', '<', '>', '?', '`']
  ];

  const handleKeyDown = (key) => {
    setActiveKey(key);
    onKeyPress(key);
  };

  const handleKeyUp = () => {
    setActiveKey(null);
  };

  return (
    <div className="keyboard">
      <div className="keyboard-section">
        <h3>Letters</h3>
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map(key => (
              <button
                key={key}
                className={`keyboard-key ${key === activeKey ? 'active' : ''}`}
                onMouseDown={() => handleKeyDown(key)}
                onMouseUp={handleKeyUp}
                onTouchStart={() => handleKeyDown(key)}
                onTouchEnd={handleKeyUp}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="keyboard-section">
        <h3>Numbers</h3>
        {numbers.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map(key => (
              <button
                key={key}
                className={`keyboard-key ${key === activeKey ? 'active' : ''}`}
                onMouseDown={() => handleKeyDown(key)}
                onMouseUp={handleKeyUp}
                onTouchStart={() => handleKeyDown(key)}
                onTouchEnd={handleKeyUp}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="keyboard-section">
        <h3>Special Characters</h3>
        {specials.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map(key => (
              <button
                key={key}
                className={`keyboard-key ${key === activeKey ? 'active' : ''}`}
                onMouseDown={() => handleKeyDown(key)}
                onMouseUp={handleKeyUp}
                onTouchStart={() => handleKeyDown(key)}
                onTouchEnd={handleKeyUp}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        <button className="keyboard-key special" onClick={() => onKeyPress(' ')}>Space</button>
        <button className="keyboard-key special" onClick={() => onKeyPress('\n')}>Enter</button>
        <button className="keyboard-key special" onClick={() => onKeyPress(null, true)}>Backspace</button>
      </div>
    </div>
  );
};

export default Keyboard;
