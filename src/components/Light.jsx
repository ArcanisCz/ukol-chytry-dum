import React from 'react';
import { useState } from 'react';

const Light = ({ name, state }) => {
    const [light, setLight] = useState(state);

    return (
        <div className='light' onClick={() => {light === 'on' ? setLight('off') : setLight('on')}}>
            <div className="light__icon">
                <img src={`../assets/light-${light}.svg`}/>
                <div className="light__name">{name}</div>    
            </div>
        </div>
    )
}

export default Light;