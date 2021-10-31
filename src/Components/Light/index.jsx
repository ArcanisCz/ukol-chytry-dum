import React from 'react';

import offUrl from './light-off.svg';
import onUrl from './light-on.svg';

const Light = (props) => {
  const [jeZapnuta, setJeZapnuta] = useState(state);

  const handleClick = () => {
    setJeZapnuta(true);
  };

  const handleClick2 = () => {
    setJeZapnuta(false);
  };

  return (
    <>
      <div className="light">
        <img
          src={isOn ? onUrl : offUrl}
          width={80}
          height={80}
          alt={isOn ? 'Light on' : 'Light off'}
          className="light__icon"
        />
        <div className="Light__buttons">
          <p>{props.state}</p>
          <button
            className="light__button"
            disabled={isOn}
            onClick={handleClick}
          >
            on
          </button>
          <button
            className="light__button"
            disabled={!isOn}
            onClick={handleClick2}
          >
            off
          </button>
        </div>
        <div className="light__name">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  );
};

export default Light;
