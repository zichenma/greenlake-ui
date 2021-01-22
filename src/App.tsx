import React, { useState } from 'react';
import logo from './logo.svg';
import { Hello, Hello2}  from './components/Hello';
import { LikeButton, LikeButton2 } from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';

import './App.css';

function App() {
  const [show, setShow] = useState(true);
  const {x, y} = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => setShow(!show)}>Toggle Tracker</button>
        </p>
        <Hello message="Hello World" />
        <Hello2 message="Hello World2" />
        <p> 
            自定义 hook : < br/>
            X : { x } < br/>
            Y : { y }
        </p>
        <LikeButton />
        <LikeButton2 />
        {show && <MouseTracker />}
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
