import React from "react";

import electricitySvg from './electricity.svg';
import waterSvg from './water.svg';

import './style.css';

const Energy = ({electricity, water}) => {
    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={electricitySvg} />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Elektrina</div>
                    <div className="energy__value">{electricity} kW</div>
                </div>
            </div>
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={waterSvg} />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Voda</div>
                    <div className="energy__value">{water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Energy;