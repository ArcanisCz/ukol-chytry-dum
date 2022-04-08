import React, {useState} from "react";
import "./style.css";

import temp from "./images/temp.svg";
//proč nefunguje zobrazení obrázku, když je tato adresa napsaná přímo v kódu v html?

const Climate = ({temperature, humidity}) => {
    const [tempState, setTempState] = useState(temperature);

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{tempState}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button onClick={() => {setTempState(tempState + 1)}} className="button">+</button>
                <button onClick={() => {setTempState(tempState - 1)}} className="button">-</button>
            </div>
        </div>
    );
}

export default Climate;