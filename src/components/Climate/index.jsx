import React from 'react';
import './style.css';

const Climate = ({temperature, humidity}) => {

    return(
        <div className="climate">
				<div className="climate__icon">
					<img src="./assets/temp.svg"></img>
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{temperature} &deg;C</div>
					<div className="climate__humidity">Vlhkost vzduchu: {humidity} &nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button">+</button>
					<button className="button">-</button>
				</div>
			</div>
    )
}

export default Climate;
