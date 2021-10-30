import React from 'react';
import LightOn from '../Images/light-on.svg';
import LightOff from '../Images/light-off.svg';
import './light.css';

const Light = ({ name, state }) => {
  return <div className="light"> 
  <div className="light__icon">
  <img src={state === "on" ? LightOn : LightOff} alt={state} />
  </div>
  <div className="light__name">{name}</div>
  </div>;
};

export default Light;
