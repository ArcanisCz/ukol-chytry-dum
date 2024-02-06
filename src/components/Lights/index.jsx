import React from "react";
import "./style.css";

import Light from "../Light";

const Lights = ({lights}) => {
    return (
        <>
            {lights.map((light, index) => {
                return <Light
                    key={index}
                    name={light.name}
                    state={light.state}
                    />
            })}
        </>
    )
}

export default Lights;