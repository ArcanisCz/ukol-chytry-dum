import React from 'react';
import { render } from 'react-dom';

// styles
import './style.css';

// components
import Header from './components/Header';
import Dashboard from './components/Dashboard';

// data
import smartHomeData from './smartHomeData';

const App = () => (
  <div className="container">
    <Header title="Chytrý dům"/>
    <Dashboard data={smartHomeData}/>
  </div>
);

render(<App />, document.querySelector('#app'));
