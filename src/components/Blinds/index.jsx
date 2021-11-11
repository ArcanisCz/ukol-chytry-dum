import React, {useState} from "react";


import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';

const Blinds = ({state}) => {

    const [bliState, setBliState] = useState(state);
    const changeBlinds = (e) => setBliState(e.target.innerText === 'Otevřít' ? 'open' : 'closed')

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={bliState === 'open' ? blindsOpen : blindsClosed} />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button onClick={changeBlinds} className={`bli-button ${bliState === 'closed' ? 'bli-button--active' : ''}`}>Otevřít</button>
                <button onClick={changeBlinds} className={`bli-button ${bliState === 'open' ? 'bli-button--active' : ''}`}>Zavřít</button>
            </div>
        </div>
    );
}

export default Blinds;