import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import blindsOpen from '../../assets/blinds-open.svg';
import blindsClosed from '../../assets/blinds-closed.svg';

export const Blinds = (props) => {

    let initialOpened = false;
    if(props.blinds == 'open')
    {
        console.log(props.blinds);
        initialOpened = true;
    }
    else 
    {
        initialOpened = false;
    }
    const [opened, setOpened] = useState(initialOpened);

    let upperClass = "button button--active";
    let lowerClass = "button";
    let image = blindsOpen;

    const changeState = () =>
    {
        () => setOpened(!opened);
    }

    if(!opened)
    {
        upperClass = "button";
        lowerClass = "button button--active";
        image=blindsClosed;
    }
    console.log(opened);
    console.log(upperClass);
    console.log(lowerClass);

    return(
        <>
            <div class="blinds">
                <div class="blinds__icon">
                    <img src={image}/>
                </div>
                <div class="blinds__name">
                    Žaluzie
                </div>
                <div class="blinds__controls">
                    <button class={upperClass} onClick={() => setOpened(true)}>Otevřeno</button>
                    <button class={lowerClass} onClick={() => setOpened(false)}>Zavřeno</button>
                </div>
            </div>
            </>
        );
};

export default Blinds;