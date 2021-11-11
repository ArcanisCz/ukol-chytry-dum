import React from 'react'

import Lights from '../Lights'
import Blinds  from '../Blinds'
import Climate from '../Climate/'
import Energy from '../Energy'

import './style.css';

const Dashboard = ({data}) => {
    return (
        <>
            <main className="dashboard">
                <Lights  lights={data.lights} />
                <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
                <Blinds  state={data.blinds}/>
                <Energy  electricity={data.energyConsumption.electricity} water={data.energyConsumption.water}/>
            </main> 
            
        </>
    );
    
}

export default Dashboard;