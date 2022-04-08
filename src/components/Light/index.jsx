import React, {useState} from "react";
import "./style.css";

import lightOn from "./images/light-on.svg";
import lightOff from "./images/light-off.svg";

const Light = ({name, state}) => {
    const [turn, setTurn] = useState(state);

    return (
        <div className="light" onClick={() => {turn == "on" ? setTurn("off") : setTurn("on")}}>
            <div className="light__icon">
                <img src={turn == "on" ? lightOn : lightOff}/>
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
}

export default Light;