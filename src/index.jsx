import React from 'react';
import { render } from 'react-dom';
import './style.css';
import smartHomeData from './smartHomeData';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return(
    <>
    <div className="detail">
    	<div class="container">
        <Header title="Chytrý dům"/>
        <Dashboard data={smartHomeData}/>
	    </div>
    </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
