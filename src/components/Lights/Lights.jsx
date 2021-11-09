import React from 'react';
import './style.css';
import Light from '../Light/Light';

export const Lights = (props) => {
    const items = props.lights.map(o => <Light state={o.state} name={o.name}/>);
    
    return(
        <>
            <div class="lights">
                {items}
            </div>
        </>
    );
};

export default Lights;