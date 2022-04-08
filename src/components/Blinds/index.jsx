import React, {useState} from "react";
import "./style.css";

import blindsOpened from "./images/blinds-open.svg";
import blindsClosed from "./images/blinds-closed.svg";

const Blinds = ({state}) => {
    const [blindsState, setBlindsState] = useState(state);
    
    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsState == "open" ? blindsOpened : blindsClosed}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button onClick={() => {setBlindsState("open")}} className={blindsState == "open" ? "button button--active" : "button"}>Otevřeno</button>
                <button onClick={() => {setBlindsState("closed")}} className={blindsState == "closed" ? "button button--active" : "button"}>Zavřeno</button>
            </div>
        </div>
    );
}

export default Blinds;