import React from 'react';
import Temp from '../Images/temp.svg'
import './climate.css';


const Climate = ({climate}) => {
    
    return (
    <div className="climate">
    <div className="climate__icon">
        <img src={Temp} />
    </div>
    <div className="climate__content">
        <div className="climate__temperature">{climate.temperature}&deg;C</div>
        <div className="climate__humidity">Vlhkost vzduchu {climate.humidity}&nbsp;%</div>
    </div>
    <div className="climate__controls">
        <button className="button">+</button>
        <button className="button">-</button>
    </div>
</div>
)
}

export default Climate;