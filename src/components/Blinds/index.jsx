import React, { useState }  from 'react';
import './style.css';
import openBlinds from './blinds-open.svg';
import closedBlinds from './blinds-closed.svg';

const Blinds = ({state}) => {

    const [status, setStatus] = useState(state)
    console.log(status);

    return (
        <div class="blinds">
				<div className="blinds__icon">
					<img src={status==='open' ? openBlinds : closedBlinds}></img>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className={`button ${status==='open' ? 'button--active' : ''}`} onClick={()=>{setStatus('open')}} >Otevřeno</button>
					<button className={`button ${status==='open' ? '' : 'button--active'}`}  onClick={()=>{setStatus('closed')}} >Zavřeno</button>
				</div>
			</div>
    )

}

export default Blinds;