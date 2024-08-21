import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleKeyPress = (key, isSpecial = false) => {
    if (isSpecial) {
      setInput(prev => prev.slice(0, -1)); // Handle backspace
    } else if (key === '\n') {
      setInput(prev => prev + '\n'); // Handle enter
    } else {
      setInput(prev => prev + key); // Append regular key
    }
  };

  return (
    <div className="App">
      <h1>Interactive Virtual Keyboard</h1>
      <div className="input-container">
        <textarea value={input} readOnly rows="5" />
      </div>
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
