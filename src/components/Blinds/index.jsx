import React, { useState } from 'react';
import './style.css';

import blindsclosed from './images/blinds-closed.svg';
import blindsopen from './images/blinds-open.svg';

const Blinds = ({ state }) => {
  const [blinds, setBlinds] = useState(state);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        {/*  <img src={blindsopen} alt="" /> */}
        <img src={blinds === 'open' ? blindsopen : blindsclosed} alt={blinds} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className="button button--active"
          onClick={() => setBlinds('open')}
        >
          Otevřeno
        </button>
        <button className="button" onClick={() => setBlinds('closed')}>
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
