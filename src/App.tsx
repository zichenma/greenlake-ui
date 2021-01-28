import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ ButtonType.Default }>Default</Button>
        <Button disabled> Disabled</Button>
        <Button btnType={ ButtonType.Primary } size={ButtonSize.Large}>Primary Large</Button>
        <Button btnType={ ButtonType.Default } size={ButtonSize.Small}>Default Small</Button>
        <Button btnType={ ButtonType.Danger } size={ButtonSize.Large}> Danger Large</Button>
        <Button btnType={ButtonType.Link} href="https://www.google.com" disabled>Google Link(default)</Button>
        <Button btnType={ButtonType.Link} href="https://www.google.com" >Google Link(disabled)</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
