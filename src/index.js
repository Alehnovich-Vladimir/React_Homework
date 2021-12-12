import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counterComponent'
import ButtonRepeat from './components/cyclicButton'

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <ButtonRepeat className="btnRepeat" />
  </React.StrictMode>,
  document.getElementById('root')
);

