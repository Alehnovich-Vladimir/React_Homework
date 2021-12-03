import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './Square';
import VideoTag from './VideoTag';
import Text from './Text'

ReactDOM.render(
  <React.StrictMode>
    <Square label="BIG square" cssClass="big" />
    <Square label="A less square" cssClass="less" />
    <Square label="The smallest one" cssClass="small" />
  </React.StrictMode>,
  document.getElementById('root')
);

