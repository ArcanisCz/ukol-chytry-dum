import React, { useState } from 'react';

import offUrl from './light-off.svg';
import onUrl from './light-on.svg';

/*const Light = (props) => {
  const [jeZapnuta, setJeZapnuta] = useState(state);

  const handleClick = () => {
    setJeZapnuta(true);
  };
};

return (
  <>
    <div className="light">
      <button className="light__button" disabled={isOn} onClick={handleClick}>
        <img
          src={isOn ? onUrl : offUrl}
          width={80}
          height={80}
          alt={isOn ? 'Light on' : 'Light off'}
          className="light__icon"
        />

        <div className="light__name">
          <p>{props.name}</p>
          <p>{props.state}</p>
        </div>
      </button>
    </div>
  </>
);
*/

const Light = (props) => {
  const [isOn, setIsOn] = useState(resolveOnOff(state));

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const resolveOnOff = (state) => {
    return state === 'on' ? true : false;
  };

  return (
    <>
      <div className="light">
        <button onClick={handleClick}>
          <img src={isOn ? onUrl : offUrl} />
          <p>{props.name}</p>
          <p>{props.state}</p>
        </button>
      </div>
    </>
  );
};

export default Light;
