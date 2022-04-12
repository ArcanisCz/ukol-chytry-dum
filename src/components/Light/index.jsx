import React, {useState} from "react";
import "./style.css"

import lightOn from "./light-on.svg"
import lightOff from "./light-off.svg"

export const Light = ({name, state}) => {
    const [stateLight, setStateLight] = useState(state)

    const handleClick = () => {
        
		if (stateLight === "on") {
            setStateLight = ("off")
    
        } else {
            setStateLight = ("on")
           
        }
	}

    // const on = () => {
    //     setStateLight('turnOn')
    // }

    // const off = () => {
    //     setStateLight('turnOff')
    // }

    console.log(Light)
    
    return(
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={stateLight === "on" ? lightOn : lightOff} />
            </div>
            <div className="light__name">{name}</div>
        </div>
    )
    
}

