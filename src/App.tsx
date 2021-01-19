import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button>你好</Button>
      <Button btnType={ButtonType.Primary}>你好</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Link} href="https://jd.com">你好</Button>
      <header className="App-header">
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
