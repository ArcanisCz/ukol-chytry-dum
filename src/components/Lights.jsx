import React from 'react';

// components
import Light from './Light';

const Lights = ({ lights }) => {
    return (
        <div className='lights'>
            {lights.map((light) => (
                <Light 
                    name={light.name} 
                    state={light.state} 
                    key={light.name}
                />
            ))}
        </div>
    )
}

export default Lights;