import React from 'react';
import Open from '../Images/blinds-open.svg';
import Closed from '../Images/blinds-closed.svg';
import './blinds.css';

const Blinds = ({blinds}) => {
    return (
<div className="blinds">
<div className="blinds__icon">
    <img src={Open} />
</div>
<div className="blinds__name">
    Žaluzie {blinds.state}
</div>
<div className="blinds__controls">
    <button className="button button--active">Otevřeno</button>
    <button className="button">Zavřeno</button>
</div>
</div>
)

}

export default Blinds;