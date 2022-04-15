import React from 'react';
import { useState } from 'react';

const Blinds = ({ state }) => {
    const [open, setOpen] = useState(state);

    return(
        <div className='blinds'>
            <div className="blinds__icon">
                <img src={`./assets/blinds-${open}.svg`} />
            </div>
            <div className="blinds__name">Žaluzie</div>
            <div className="blinds__controls">
                <button 
                    className={open === 'open' ? "button button--active" : "button"}
                    onClick={() => setOpen('open') }
                >Otevřeno</button>
                <button 
                    className={open === 'closed' ? "button button--active" : "button"}
                    onClick={() => setOpen('closed')}
                >Zavřeno</button>
            </div>
        </div>
    )
}

export default Blinds;