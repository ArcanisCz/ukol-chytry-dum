import React, {useState} from "react";

import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';

import './style.css';

const Blinds = ({state}) => {

    const [stateOfBlinds, setStateOfBlind] = useState(state);

    const onClose = () => {
        setStateOfBlind('close');
    }

    const onOpen = () => {
        setStateOfBlind('open');
    }

    return (
        <div className="blinds">
            <div className="blinds__icon">
            <img src={stateOfBlinds === 'open' ? blindsOpen : blindsClosed} />
            </div>
            <div className="blinds__name">
                Žalúzie
            </div>
            <div className="blinds__controls">
                <button className={stateOfBlinds === 'open' ? "button button--active" : "button"} onClick={onOpen}>Otvorené</button>
                <button className={stateOfBlinds === 'close' ? "button button--active" : "button"} onClick={onClose}>Zavrené</button>
            </div>
        </div>
    );
}

export default Blinds;