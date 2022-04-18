import React from 'react';
import { render } from 'react-dom';
import './style.css';
import SmartHomeData from "./smartHomeData"
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

const App = () => {
  return (
    <div className="container">
      <Header title='Smart House'/>
      <Dashboard data={SmartHomeData} />
    </div>
  )
  };

render(<App />, document.querySelector('#app'));
