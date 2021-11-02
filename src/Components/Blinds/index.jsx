import React, { useState } from 'react';

import './style.css';

import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';

const Blinds = (props) => {
  const [isOpen, setIsOpen] = useState(props.blinds.state);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClick2 = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="blinds">
        <div className="blinds__name">Žaluzie</div>

        <img
          src={isOpen ? blindsOpen : blindsClosed}
          width={80}
          height={80}
          alt={isOpen ? 'Blinds open' : 'Blinds closed'}
          className="blinds__icon"
        />

        <div className="blinds__controls">
          <button onClick={handleClick} className="button button--active">
            Otevřeno
          </button>
          <button onClick={handleClick2} className="button">
            Zavřeno
          </button>
        </div>
      </div>
    </>
  );
};

export default Blinds;
