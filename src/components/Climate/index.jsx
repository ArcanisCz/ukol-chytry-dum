import React, { useState } from 'react';
import './style.css';

const Climate = ({temperature, humidity}) => {

	const [degrees, setDegrees] = useState(temperature);
	console.log(temperature)

    return(
        <div className="climate">
				<div className="climate__icon">
					<img src="./assets/temp.svg"></img>
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{degrees} &deg;C</div>
					<div className="climate__humidity">Vlhkost vzduchu: {humidity} &nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={() => {setDegrees(degrees+1)}}>+</button>
					<button className="button" onClick={() => {setDegrees(degrees-1)}}>-</button>
				</div>
			</div>
    )
}

export default Climate;
