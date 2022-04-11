import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';

const App = () => (
  <>
    <div class="container">
      <Header title="Chytrý dům" />

    </div>
  </>
);

render(<App />, document.querySelector('#app'));
