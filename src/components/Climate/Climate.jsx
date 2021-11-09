import React, {useState} from 'react';
import './style.css';
import temp from '../../assets/temp.svg';

export const Climate = (props) => {
    const [temperature, setTemperature] = useState(props.temperature);
    console.log(temperature);
  return(
      <>
    <div class="climate">
        <div class="climate__icon">
            <img src={temp} />
        </div>
        <div class="climate__content">
            <div class="climate__temperature">{temperature}&deg;C</div>
            <div class="climate__humidity">Vlhost vzduchu {props.humidity}&nbsp;%</div>
        </div>
        <div class="climate__controls">
            <button class="button" onClick={() => setTemperature(temperature + 1)}>+</button>
            <button class="button" onClick={() => setTemperature(temperature - 1)}>-</button>
        </div>
    </div>
    </>
    );
};

export default Climate;