import React, { useState } from 'react';

import offUrl from './light-off.svg';
import onUrl from './light-on.svg';

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
          <img src={isOn ? onUrl : offUrl} />
          <p>{props.name}</p>
        </button>
      </div>
    </>
  );
};

export default Light;
