import React, { useState } from "react";
import "./style.css";
import climateUrl from './temp.svg';

const Climate = ({ temperature, humidity }) => {
    const [temp, setTemp] = useState(temperature);

    const handlePlus = () => {
        if (temp < 50) {
            setTemp(temp + 1)
        } else {
            setTemp(temperature);
        }
    }

    const handleMinus = () => {
        if (temp > -50) {
            setTemp(temp - 1)
        } else {
            setTemp(temperature);
        }
    }

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={climateUrl} alt='Climate' />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temp}&deg;C</div>
                <div className="climate__humidity">Vlhkost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={handlePlus}>+</button>
                <button className="button" onClick={handleMinus}>-</button>
            </div>
        </div>

    )
}

export default Climate;
