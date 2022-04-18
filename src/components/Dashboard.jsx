import React from 'react';
import Blinds from './Blinds';

// components 
import Climate from './Climate';
import Energy from './Energy';
import Lights from './Lights';

const Dashboard = ({ data }) => {
    return (
        <main className="dashboard">
            <Lights lights={ data.lights }/>
            <Climate 
                temperature={ data.climate.temperature } 
                humidity={ data.climate.humidity } 
            />
            <Blinds state={ data.blinds } />
            <Energy 
                electricity={ data.energyConsumption.electricity }
                water={ data.energyConsumption.water }            
            />
        </main>
    )
}

export default Dashboard;