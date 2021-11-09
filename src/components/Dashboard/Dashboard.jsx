import React from 'react';
import Lights from '../Lights/Lights';
import Climate from '../Climate/Climate';
import Energy from '../Energy/Energy';
import Blinds from '../Blinds/Blinds';
import './style.css';

export const Dashboard = (props) => {
return(
    <>
        <main class="dashboard">
            <Lights lights={props.data.lights} />
            <Climate temperature={props.data.climate.temperature} humidity={props.data.climate.humidity}/>
            <Blinds blinds={props.data.blinds}/>
            <Energy electricity={props.data.energyConsumption.electricity} water={props.data.energyConsumption.water} />

        </main>
    </>
    );
};

export default Dashboard;