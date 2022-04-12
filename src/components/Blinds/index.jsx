import React from "react";
import "./style.css"
import { useState } from "react"

import blindsOpen from "./blinds-open.svg"
import blindsClosed from "./blinds-closed.svg"

export const Blinds = ({ state }) => {
    const [stateBlinds, setStateBlinds] = useState(state)

    const open = () => {
        setStateBlinds('open')
    }

    const closed = () => {
        setStateBlinds('closed')
    }
    
    // if open click on this, else close
    // const handleClick = () => {
    //     if (stateBlinds === "open") {
    //         setStateBlinds = ("blindsOpen")
    //     } else {
    //         setStateBlinds = ("blindsClosed")
    //     }
    // }

    return (
        <div className="blinds" >
            <div className="blinds__icon">
                <img src={stateBlinds === 'open' ? blindsOpen : blindsClosed} />
            </div>
            <div className="blinds__name">Žaluzie</div>
            <div className="blinds__controls">
                <button className={stateBlinds === 'open' ? "button button--active" : "button"} onClick={open}>Otevřeno</button>
                <button className={stateBlinds === 'closed' ? "button button--active" : "button"} onClick={closed}>Zavřeno</button>
            </div>
        </div>
    )
    
}