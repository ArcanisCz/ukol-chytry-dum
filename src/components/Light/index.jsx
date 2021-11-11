import React, { useState } from "react";
import onImg from "./img/light-on.svg"
import offImg from "./img/light-off.svg"

const Light = ({name, state}) => {
    
    const [localState, setLocalState] = useState (state)


    const handleClick = () => {
        setLocalState (localState === 'on'? 'off' : 'on') 
        
        // if (localState === 'on') {
        //     setLocalState ('off')
        // } else {
        //     setLocalState ('on')
        // }
    }
    
    return(
        <div onClick={handleClick} className = 'light'>
            <div className="light__icon">
				<img src={localState === 'on'? offImg : onImg}/>
			</div>
            <div className="light__name">
                {name}
            </div>
        </div>
        )

    
}

export default Light;