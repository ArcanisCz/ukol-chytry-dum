import React, { useState }  from 'react';
import './style.css';

const Blinds = ({state}) => {

    const openBlinds = './assets/blinds-open.svg';
    const closedBlinds = './assets/blinds-closed.svg';

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