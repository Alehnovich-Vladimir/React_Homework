import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counterComponent'
import ButtonRepeat from './components/cyclicButton'
import Conditional from './components/conditionalRendering'
import Dropdown from './components/customDropdown'
import Ternary from './components/ternaryOperator'
import Pages from './components/simplePagination'
import UseEffect from './components/useEffect'
import Modifying from './components/modifyingArray'
import UserList from './components/user_list/UserList'

ReactDOM.render(
  <React.StrictMode>
    <Conditional />
    <Counter />
    <Dropdown />
    <ButtonRepeat className="btnRepeat" />
    <Modifying />
    <Pages />
    <Ternary />
    <UseEffect />
    <UserList />
  </React.StrictMode>,
  document.getElementById('root')
);

