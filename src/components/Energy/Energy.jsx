import React from 'react';
import { render } from 'react-dom';
import './style.css';
import electricity from '../../assets/electricity.svg';
import water from '../../assets/water.svg';

export const Energy = (props) => {
  return(
      <>
        <div class="energy">
            <div class="energy__source">
                <div class="energy__icon">
                    <img src={electricity}/>
                </div>
                <div class="energy__consumption">
                    <div class="energy__description">Elektřina</div>
                    <div class="energy__value">{props.electricity}</div>
                </div>
            </div>
            <div class="energy__source">
                <div class="energy__icon">
                    <img src={water}/>
                </div>
                <div class="energy__consumption">
                    <div class="energy__description">Voda</div>
                    <div class="energy__value">{props.water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Energy;