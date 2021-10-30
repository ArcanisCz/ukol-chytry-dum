import React, { useState } from 'react';
import Temper from '../Images/temp.svg'
import './climate.css';


const Climate = ({ climate }) => {
    const [temp, setTemp] = useState(climate.temperature);

    const handleClick = (step) => {
        setTemp(temp + step);
    }

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={Temper} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temp}&deg;C</div>
                <div className="climate__humidity">Vlhkost vzduchu {climate.humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={() => handleClick(1)}>+</button>
                <button className="button" onClick={() => handleClick(-1)}>-</button>
            </div>
        </div>
    )
}

export default Climate;