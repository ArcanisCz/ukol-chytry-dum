import React, {useState} from 'react';

const Light = ({name, state}) => {

    const [status, setState] = useState(state);

	const urlOn = '/assets/light-on.svg';
	const urlOff = '/assets/light-off.svg';

	const handleClick = () =>{
		status === 'on' ? setState('off') : setState('on');
	}

    return(
		 <div className="light" onClick={handleClick}>
					<div className="light__icon">
						<img src={status==='on' ? urlOn : urlOff}></img>
					</div>
					<div className="light__name">
						{name}
					</div>
		</div>		
    )
}

export default Light;
