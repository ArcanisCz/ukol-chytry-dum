import React, {useState} from 'react';
import './style.css';
import lightOn from '../../assets/light-on.svg';
import lightOff from '../../assets/light-off.svg';

export const Light = (props) => {
    let stateImg = lightOn;
    let initialState = false;
    if(props.state == 'on')
    {
        initialState = true;
    }
    const [state, setState] = useState(initialState);
    if (!state)
    {
        stateImg = lightOff;
    }
    console.log(stateImg);
    return(
        <>
            <div class="light" onClick={() => setState(!state)}>
                <div class="light__icon">
                    <img className="light" src={stateImg}/>
                </div>
                <div class="light__name">
                    {props.name}
                </div>
            </div>
        </>
        );
};

export default Light;