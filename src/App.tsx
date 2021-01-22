import React from 'react';
import logo from './logo.svg';
import { Hello, Hello2}  from './components/Hello';
import { LikeButton, LikeButton2 } from './components/LikeButton';
import MouseTracker from './components/MouseTracker';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello message="Hello World" />
        <Hello2 message="Hello World2" />
        <LikeButton />
        <LikeButton2 />
        <MouseTracker />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
