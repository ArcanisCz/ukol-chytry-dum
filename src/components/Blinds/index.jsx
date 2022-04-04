import React from "react";
import "./style.css"
import { useState } from "react"

import blindsOpen from "./blinds-open.svg"
import blindsClosed from "./blinds-closed.svg"

export const Blinds = ({state}) => {
    const [stateBlinds, setStateBlinds] = useState(state)
    
    // if open click on this, else close
    setStateBlinds

    return (
        <div className="blinds" >
            <div className="blinds__icon">
                <img src={stateBlinds === "open" ? blindsOpen : blindsClosed} />
            </div>
            <div className="blinds__name">Žaluzie</div>
            <div className="blinds__controls">
                <button></button>
                <button></button>
            </div>
        </div>
    )
    
}