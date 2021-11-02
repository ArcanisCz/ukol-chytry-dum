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
      <div className="light">
        <button onClick={handleClick}>
          <img
            src={isOn ? onUrl : offUrl}
            width={100}
            height={40}
            className="button"
          />
          <p>{props.name}</p>
        </button>
      </div>
    </>
  );
};

export default Light;
