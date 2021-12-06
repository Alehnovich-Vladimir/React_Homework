import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counterComponent'
import ButtonRepeat from './components/cyclicButton'
import Conditional from './components/conditionalRendering'

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <ButtonRepeat className="btnRepeat" />
    <Conditional />
  </React.StrictMode>,
  document.getElementById('root')
);

