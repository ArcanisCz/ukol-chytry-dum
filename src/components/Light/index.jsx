import React, { useState } from 'react';
import './style.css';

import lightoff from './images/light-off.svg';
import lighton from './images/light-on.svg';

const Light = ({ name, state }) => {
  const [light, setLight] = useState(state);

  const switchLight = () => {
    setLight(!light);
  };
  return (
    <div className="light" onClick={switchLight}>
      <div className="light__icon">
        <img src={light ? lighton : lightoff} alt={name} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
