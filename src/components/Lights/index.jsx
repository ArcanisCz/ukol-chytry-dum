import React from 'react';
import './style.css';

import Light from './../Light';

const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((element) => (
        <Light
          key={element.name + element.state}
          name={element.name}
          state={element.state}
        />
      ))}
    </div>
  );
};

export default Lights;
