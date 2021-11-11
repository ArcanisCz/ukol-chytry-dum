import React from 'react';

import './style.css';

import Electricity from './electricity.svg';
import Water from './water.svg';

const Energy = (props) => {
  return (
    <>
      <div className="energy">
        <div className="energy__source">
          <div className="energy__icon">
            <img src={Electricity} width={80} height={80} />
          </div>
          <div className="energy__consumption">
            <div className="energy__description">Elektřina</div>
            <div className="energy__value">
              {props.energyConsumption.electricity} kW
            </div>
          </div>
        </div>
        <div className="energy__source">
          <div className="energy__icon">
            <img src={Water} width={80} height={80} />
          </div>
          <div className="energy__consumption">
            <div className="energy__description">Voda</div>
            <div className="energy__value">
              {props.energyConsumption.water} m<sup>3</sup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Energy;
