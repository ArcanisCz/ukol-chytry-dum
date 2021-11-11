import React from "react";
import Light from "../Light";


const Lights = ({lights}) => (
    <div className="lights">
        {
            lights.map(({name, state}) => <Light key={name} name={name} state={state} />)
        }
    </div>
);

export default Lights;