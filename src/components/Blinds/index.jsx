import React, { useState } from "react";
import "./style.css";
import blindsOpenUrl from './blinds-open.svg';
import blindsClosedUrl from './blinds-closed.svg';

const Blinds = ({ state }) => {
    const [blind, setBlind] = useState(state);

    const handleOpen = () => {
        setBlind('open');
    }

    const handleClosed = () => {
        setBlind('closed');
    }

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blind === 'open' ? blindsOpenUrl : blindsClosedUrl} alt='blinds' />
            </div>

            <div className="blinds__name">
                Žaluzie
            </div>

            <div className="blinds__controls">
                <button className={`button ${blind === 'open' ? 'button--active' : null} `} onClick={handleOpen}>Otevřeno</button>
                <button className={`button ${blind === 'closed' ? 'button--active' : null} `} onClick={handleClosed}>Zavřeno</button>
            </div>
        </div>
    );
}

export default Blinds;
