import React, { useState } from "react";
import "./style.css"

import tempIcon from "./temp.svg"

export const Climate = ({temperature, humidity}) => {

    const [stupne, setStupne] = useState(temperature) 
    
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={tempIcon} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{stupne}°C</div>
                <div className="climate__humidity"> Vlhkost vzduchu {humidity} %</div>
            </div>
            <div className="climate__controls">
                <button onClick={() => setStupne(stupne + 1)}>+</button>
                <button onClick={() => setStupne(stupne - 1)}>-</button>

            </div>
        </div>
    )
  
}
