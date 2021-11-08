import React, { useState } from "react";
//import 'style.css';

import closedImg from './img/blinds-closed.svg'
import openImg from './img/blinds-open.svg'

const Blinds = ({state}) => {
    
    const [localState, setLocalstate] = useState (state)
    
    const open = (disabled) => {
        
        if (localState === 'closed') {
            setLocalstate ('open')
        }
        console.log(localState)
    }

    const closed = (disabled) => {
       
        if (localState === 'open') {
            setLocalstate ('closed')
        }
        console.log(localState)
    }

     
    return (
            <div className="blinds">
                <div className="blinds__icon">
                    <img src={localState === 'open'? openImg : closedImg}/>
                </div>
                
                <div className="blinds__name">
                    Žaluzie
                </div>
                <div className="blinds__controls">

                    <button 
                        className="button button--active"
                        onClick = {open}
                        disabled = {localState === 'open'} 
                        >Otevřeno
                    </button>

                    <button 
                        className="button"
                        onClick = {closed} 
                        disabled = {localState ===! 'open'} 
                        >Zavřeno
                    </button>

                </div>
            </div>
    )
}

export default Blinds;