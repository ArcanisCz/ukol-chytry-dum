import React, { useState } from "react";

import lightOn from './light-on.svg';
import lightOff from './light-off.svg';

import './style.css';

const Light = ({name, state}) => {
   
    const [lightState, setLightState] = useState(state);
    const switchLight = () => setLightState(lightState => (lightState === 'on' ? 'off' : 'on'));
    
    return (
        <>
            <div onClick={switchLight} className="light" >
                <div className="light__icon">
                    <img src={(lightState === 'on' ? lightOn : lightOff)} />
                </div>
                <div className="light__name">{name}</div>	
			</div>      
        </>
    ); 
}

export default Light;