import React, { useState } from "react";

import './style.css';

import lightOff from './images/light-off.svg';
import lightOn from './images/light-on.svg';

const Light = ({name, state}) => {
    const [rozsviceno, setRozsviceno] = useState(state);

    return (
        <div className="light" onClick={() => {(rozsviceno === 'on') ? setRozsviceno('off') : setRozsviceno('on')}}> 
            <div className="light__icon">
                <img src={rozsviceno === 'on' ? lightOn : lightOff}/> 
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
};

export default Light;