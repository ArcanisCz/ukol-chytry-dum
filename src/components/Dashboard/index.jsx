import React from 'react';
import Lights from '../Lights';
import './style.css';
import Climate from '../Climate';
import Blinds from '../Blinds';

const Dashboard = ({data}) => {

    return (
        <main className="dashboard">
            <Lights lights={data.lights} /> 
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
            <Blinds state={data.blinds}/>           
        </main>

    )
}

export default Dashboard;