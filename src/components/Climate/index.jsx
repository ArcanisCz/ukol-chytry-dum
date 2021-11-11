import React, { useState } from "react";

import temp from "./img/temp.svg"

const Climate = ({temperature, humidity}) => {

    const [localTemperature, setLocalTemperature] = useState (temperature)

    const plus = () => {
        setLocalTemperature(localTemperature + 1)
    }

    const minus = () => {
        setLocalTemperature(localTemperature - 1)
    }

    return(
        <div className="climate">
            <div className="climate__icon">
				<img src={temp}/>
			</div>
            
            <div className = "climate__content">
                <div className = "climate__temperature">{localTemperature} °C</div>
                <div className = "climate__humidity">Vlhkost vzduchu {humidity} %</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={plus}>+</button>
                <button className="button" onClick={minus}>-</button>
            </div>
        </div>
    )
}

export default Climate;