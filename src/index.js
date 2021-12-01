import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './Square';

ReactDOM.render(
  <React.StrictMode>
    <Square label="BIG square" cssClass="big" />
    <Square label="A less square" cssClass="less" />
    <Square label="The smallest one" cssClass="small" />
  </React.StrictMode>,
  document.getElementById('root')
);

