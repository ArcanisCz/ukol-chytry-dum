import React from 'react';

import Light from '../Light';

import './style.css';

const Lights = (props) => {
  return (
    <>
      <div className="lights">
        {props.lights.map((light) => (
          <Light key={light.name} name={light.name} state={light.state} />
        ))}
      </div>
    </>
  );
};

export default Lights;
