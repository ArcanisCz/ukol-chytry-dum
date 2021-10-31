import React from 'react';

import Light from '../Light';

const Lights = (props) => {
  return (
    <>
      <div className="lights">
        {props.lights.map((light) => (
          <Light key={light.name} state={light.state} />
        ))}
      </div>
    </>
  );
};

export default Lights;
