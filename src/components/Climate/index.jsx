import React, { useState } from "react";
import temp from './temp.svg';
import './style.css';


const Climate = ({temperature, humidity}) => {

    const [showTemp, setShowTemp] = useState(temperature);

    const changeHouseTemp = (e) => setShowTemp(showTemp => showTemp + (e.target.innerText === '+' ? 1 : -1));

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{showTemp}&deg;C</div>
                <div className="climate__humidity">Vlhosť vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button onClick={changeHouseTemp} className="cli-button">+</button>
                <button onClick={changeHouseTemp} className="cli-button">-</button>
            </div>
        </div>
    );
}

export default Climate;