import React, { useState } from 'react';
import LightOn from '../Images/light-on.svg';
import LightOff from '../Images/light-off.svg';
import './light.css';

const Light = ({ name, state }) => {
  const [light, setLight] = useState(state);

  const handleClick = () => {

    setLight(light === "on" ? "off" : "on");
  }

  return (
    <div className="light" onClick={handleClick}>
      <div className="light__icon">
        <img src={light === "on" ? LightOn : LightOff} alt={light} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
