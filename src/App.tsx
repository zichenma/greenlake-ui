import React, { useState } from 'react';
import logo from './logo.svg';
import { Hello, Hello2}  from './components/Hello';
import { LikeButton, LikeButton2 } from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import withLoader from './components/withLoader';
import './App.css';

interface IShowResult {
  message: string;
  status: string;
}

const DogShow: React.FC<{data : IShowResult}> = ({ data }) => {
    return (
      <>
        <h2>Dog Show: {data.status}</h2>
        <img src={data.message} />
      </>
    )
}

function App() {
  const [show, setShow] = useState(true);
  const {x, y} = useMousePosition();
  const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => setShow(!show)}>Toggle Tracker</button>
        </p>
        <WrappedDogShow />
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
