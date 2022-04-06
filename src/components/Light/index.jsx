import React from "react";
import "./style.css"
import { useState } from "react"

import lightOn from "./light-on.svg"
import lightOff from "./light-off.svg"

export const Light = ({name, state}) => {
    const [stateLight, setStateLight] = useState(state)

    return(
        <div className="light">
            <div className="light__icon">
                <img src={stateLight === "open" ? lightOn : lightOff} />
            </div>
            <div className="light__name">{name}</div>
        </div>
    )
    
}