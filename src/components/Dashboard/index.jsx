import React from 'react';
import Lights from '../Lights';
import './style.css';
import Climate from '../Climate';
import Blinds from '../Blinds';

const Dashboard = ({data}) => {

    return (
        <main className="dashboard">
            <Lights lights={data.lights} /> 
            <Climate temperature={data.temperature} humidity={data.humidity} />
            <Blinds state={data.data}/>           
        </main>

    )
}

export default Dashboard;