import React, { useState } from 'react';
import logo from './logo.svg';
import { Hello, Hello2}  from './components/Hello';
import { LikeButton, LikeButton2 } from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
// import withLoader from './components/withLoader';
import useURLLoader from './hooks/useURLLoader';
import './App.css';

interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string] : {color: string; background: string};
}

const themes: IThemeProps = {
  'light' : {
    color: '#000',
    background: '#eee',
  },
  'dark' : {
    color: '#fff',
    background: '#222',
  }
}

// React.context: 
// interface Context<T> {
//   Provider: Provider<T>;
//   Consumer: Consumer<T>;
//   displayName?: string;
// }
export const ThemeContext = React.createContext(themes.light);

// for HOC: withLoader
// const DogShow: React.FC<{data : IShowResult}> = ({ data }) => {
//     return (
//       <>
//         <h2>Dog Show: {data.status}</h2>
//         <img src={data.message} />
//       </>
//     )
// }

function App() {
  const [show, setShow] = useState(true);
  const [data, loading] = useURLLoader(`https://dog.ceo/api/breeds/image/random`, [show]);
  const dogResult = data as IShowResult;

  const {x, y} = useMousePosition();
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* <button onClick={() => setShow(!show)}>Toggle Tracker</button> */}
            <button onClick={() => setShow(!show)}>Refresh for new Dog</button>
          </p>
          { loading ? <p>🐶 读取中...</p> : <img src={dogResult && dogResult.message} /> }
          {/* <WrappedDogShow /> */}
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
