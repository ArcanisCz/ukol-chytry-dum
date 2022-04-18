import React from 'react';
import Lights from '../Lights';
import './style.css';
import Climate from '../Climate';
import Blinds from '../Blinds';
import Energy from '../Energy';

const Dashboard = ({data}) => {

    return (
        <main className="dashboard">
            <Lights lights={data.lights} /> 
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
            <Blinds state={data.blinds}/>   
            <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water}></Energy>        
        </main>

    )
}

export default Dashboard;