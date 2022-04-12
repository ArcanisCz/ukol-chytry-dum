import React from 'react';
import Light from '../Light';
import './style.css';

const Lights = (lights) => {
    console.log (lights.lights)
    return(
       
            lights.lights.map(light => <Light name={light.name} state={light.state} />)    
        )
     
};

export default Lights;
