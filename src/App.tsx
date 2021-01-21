import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Alert from './components/Alert/alert'

function App() {
  return (
    <div className="App">
      <Alert type="default" title="操作成功" description="感谢您的使用" closable></Alert>
      <br/>
      <Alert type="success" title="操作成功" description="感谢您的使用"></Alert>
      <br/>
      <Alert type="warning" title="操作成功" description="感谢您的使用"></Alert>
      <br/>
      <Alert type="danger" title="操作成功" description="感谢您的使用"></Alert>
      <Button>你好</Button>
      <Button btnType={ButtonType.Primary}>你好</Button>
      <Button btnType={ButtonType.Danger}>你好</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>你好</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Link} href="https://jd.com">你好</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Link} href="https://jd.com" disabled>你好</Button>
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
