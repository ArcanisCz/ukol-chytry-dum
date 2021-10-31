import React from 'react';

import './style.css';

import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';

const Blinds = (state) => {
  return (
    <>
      <div className="blinds">
        <div className="blinds__icon">
          <img src={blindsOpen} width={80} height={80} />
        </div>
        <div className="blinds__name">Žaluzie</div>
        <div className="blinds__controls">
          <button className="button button--active">Otevřeno</button>
          <button className="button">Zavřeno</button>
        </div>
      </div>
    </>
  );
};

export default Blinds;
