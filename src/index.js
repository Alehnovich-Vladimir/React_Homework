import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counterComponent'
import ButtonRepeat from './components/cyclicButton'
import Conditional from './components/conditionalRendering'
import Dropdown from './components/customDropdown'
import Ternary from './components/ternaryOperator'

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <ButtonRepeat className="btnRepeat" />
    <Conditional />
    <Dropdown />
    <Ternary />
  </React.StrictMode>,
  document.getElementById('root')
);

