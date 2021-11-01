import React, { useState } from 'react';
import './style.css';

import tempImg from './images/temp.svg';

const Climate = ({ temperature, humidity }) => {
  const [temp, setTemp] = useState(temperature);

  /* const changeButtonPlus = () => {
    setTemp(temp + 1);
  };

  const changeButtonMinus = () => {
    setTemp(temp - 1);
  }; */
  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={tempImg} alt="temperature image" />
      </div>
      <div className="climate__content">
        {/* <div class="climate__temperature">24&deg;C</div> */}
        {/* <div class="climate__humidity">Vlhost vzduchu 51&nbsp;%</div> */}
        <div className="climate__temperature">{temp}</div>
        <div className="climate__humidity">Vlhkost vzduchu {humidity}%</div>
      </div>
      <div className="climate__controls">
        <button className="button" value="+" onClick={() => setTemp(temp + 1)}>
          +
        </button>
        <button className="button" value="-" onClick={() => setTemp(temp - 1)}>
          -
        </button>
      </div>
    </div>
  );
};
export default Climate;
