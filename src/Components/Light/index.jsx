import React, { useState } from 'react';

import offUrl from './light-off.svg';
import onUrl from './light-on.svg';

import './style.css';

const Light = (props) => {
  const [isOn, setIsOn] = useState(resolveOnOff(props.state));

  const handleClick = () => {
    setIsOn(!isOn);
  };

  function resolveOnOff(state) {
    return state === 'on' ? true : false;
  }

  return (
    <>
      <button onClick={handleClick} className="light">
        <img
          src={isOn ? onUrl : offUrl}
          width={100}
          height={40}
          className="light__icon"
        />
        <div className="light__name"> {props.name} </div>
      </button>
    </>
  );
};

export default Light;
