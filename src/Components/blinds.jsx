import React, { useState } from 'react';
import Open from '../Images/blinds-open.svg';
import Closed from '../Images/blinds-closed.svg';
import './blinds.css';

const Blinds = ({ state }) => {
    const [isOpen, setIsOpen] = useState(state === "open")

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={isOpen ? Open : Closed} />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={isOpen ? "button button--active" : "button"} disabled={isOpen} onClick={handleClick}>Otevřeno</button>
                <button className={!isOpen ? "button button--active" : "button"} disabled={!isOpen} onClick={handleClick}>Zavřeno</button>
            </div>
        </div>
    )

}

export default Blinds;