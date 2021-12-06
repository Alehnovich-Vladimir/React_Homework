import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonRepeat from './components/cyclicButton/index'

ReactDOM.render(
  <React.StrictMode>
    <ButtonRepeat className="btnRepeat" />
  </React.StrictMode>,
  document.getElementById('root')
);

