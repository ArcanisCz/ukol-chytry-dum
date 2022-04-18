import React, { useState }  from 'react';

const Blinds = ({state}) => {

    const [status, setStatus] = useState(state)
    console.log(state);

    return (
        <div class="blinds">
				<div class="blinds__icon">
					<img src="./images/blinds-open.svg"></img>
				</div>
				<div class="blinds__name">
					Žaluzie
				</div>
				<div class="blinds__controls">
					<button class="button button--active">Otevřeno</button>
					<button class="button">Zavřeno</button>
				</div>
			</div>
    )

}

export default Blinds;