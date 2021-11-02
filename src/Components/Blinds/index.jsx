import React, { useState } from 'react';

import './style.css';

import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';

const Blinds = (props) => {
  const [isOpen, setIsOpen] = useState(props.blinds.state);

  const handleClick = () => {
    setIsOpen(isOpen);
  };

  const handleClick2 = () => {
    setIsOpen(isOpen);
  };

  return (
    <>
      <div className="blinds">
        <div className="blinds__name">Žaluzie</div>

        <img src={blindsOpen} width={80} height={80} />

        <img src={blindsClosed} width={80} height={80} />

        <div className="blinds__controls">
          <button onClick={handleClick}>Otevřeno</button>
          <button onClick={handleClick2}>Zavřeno</button>
        </div>
      </div>
    </>
  );
};

export default Blinds;
