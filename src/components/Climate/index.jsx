import React from "react";
import "./style.css"

import tempIcon from "./temp.svg"

export const Climate = ({temperature, humidity}) => {
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={tempIcon} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperature} °C</div>
                <div className="climate__humidity"> Vlhkost vzduchu {humidity} %</div>
            </div>
            <div className="climate__controls">
                <button>+</button>
                <button>-</button>

            </div>
        </div>
    )
    
}