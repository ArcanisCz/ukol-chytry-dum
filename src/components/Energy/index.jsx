import React from "react";

import electricitySvg from './electricity.svg';
import waterSvg from './water.svg';


const Energy = ({electricity, water}) => {
    return (
        <div class="energy">
            <div class="energy__source">
                <div class="energy__icon">
                    <img src={electricitySvg} />
                </div>
                <div class="energy__consumption">
                    <div class="energy__description">Elektrina</div>
                    <div class="energy__value">{electricity} kW</div>
                </div>
            </div>
            <div class="energy__source">
                <div class="energy__icon">
                    <img src={waterSvg} />
                </div>
                <div class="energy__consumption">
                    <div class="energy__description">Voda</div>
                    <div class="energy__value">{water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Energy;