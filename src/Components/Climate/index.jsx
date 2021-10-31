import React from 'react';

import './style.css';

import Temp from './temp.svg';

const Climate = (temperature, humidity) => {
  return (
    <>
      <div className="climate">
        <div className="climate__icon">
          <img src={Temp} width={80} height={80} />
        </div>
        <div className="climate__content">
          <div className="climate__temperature">24&deg;C</div>
          <div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
        </div>
        <div className="climate__controls">
          <button className="button">+</button>
          <button className="button">-</button>
        </div>
      </div>
    </>
  );
};

export default Climate;
