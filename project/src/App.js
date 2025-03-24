import React from 'react';
import './App.css';
import { FaReact, FaGithub, FaCode } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Icons Integration</h1>
        <div style={{ fontSize: '3rem', display: 'flex', gap: '20px' }}>
          <FaReact />
          <FaGithub />
          <FaCode />
        </div>
        <p>Использование пакета иконок React Icons</p>
      </header>
    </div>
  );
}

export default App;