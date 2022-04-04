import React from "react";
import "./style.css"

import electricityIcon from "./electricity.svg";
import waterIcon from "./water.svg";

export const Energy = ({electricity, water}) => {
    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={electricityIcon} />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Electricity</div>
                    <div className="energy__value">{electricity} kW</div>
                </div>
            </div>
            <div className="energy__source" >
                <div className="energy__icon">
                    <img src={waterIcon} />
                </div>
                <div className="energy__comsumption">
                    <div className="energy__description">Water</div>
                    <div className="energy__value">{water} m³</div>
                </div>

            </div>
        </div>

    )
    
}