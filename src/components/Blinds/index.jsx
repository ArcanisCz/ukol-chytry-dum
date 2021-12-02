import React, { useState } from "react";

import './style.css';

import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';

const Blinds = ({state}) => {

    const [open, setOpen] = useState(state);

    return (
        <div className="blinds">
        <div className="blinds__icon">
            <img src={open === 'open' ? blindsOpen : blindsClosed} />
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={open ===  'open' ? "button button--active" : "button"}
                onClick={() => setOpen('open')}>Otevřeno</button>
            <button className={open ===  'open' ? "button" : "button button--active"} 
                onClick={() => setOpen('closed')}>Zavřeno</button>
        </div>
    </div>
    )
};

export default Blinds;
