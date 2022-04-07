import React, {useState} from "react";
import "./style.css"

import lightOn from "./light-on.svg"
import lightOff from "./light-off.svg"

export const Light = ({name, state}) => {
    const [stateLight, setStateLight] = useState((state === "on") ? true : false)


    const handleClick = () => {
    
        
		if (stateLight === "turnOn") {
            setStateLight = ("turnOn")
    
        } else {
            setStateLight = ("turnOff")
           
        }
	}
    
    return(
        <div onClick={handleClick} className="light">
            <div className="light__icon">
                <img src={stateLight === "turnOn" ? lightOn : lightOff} />
            </div>
            <div className="light__name">{name}</div>
            <div className="light__active"></div>
        </div>
    )
    
}

