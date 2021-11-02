import React, { useState } from 'react';

import './style.css';

import Temp from './temp.svg';

const Climate = (props) => {
  const [cislo, setCislo] = useState(props.climate.temperature);

  const handleClick = () => {
    setCislo(cislo + 1);
  };

  const handleClick2 = () => {
    setCislo(cislo - 1);
  };

  return (
    <>
      <div className="climate">
        <div className="climate__icon">
          <img src={Temp} width={80} height={80} />
        </div>

        <div className="climate__content">
          <div className="climate__temperature">
            {props.climate.temperature}&deg;C
          </div>
          <div className="climate__humidity">{props.climate.humidity}%</div>
        </div>

        <div className="climate__controls">
          <button onClick={handleClick}>+</button>
          <button onClick={handleClick2}>-</button>
        </div>
      </div>
    </>
  );
};

export default Climate;
