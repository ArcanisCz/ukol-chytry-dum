import React from 'react'

import Lights from '../Lights'
import Blinds  from '../Blinds'
import Climate from '../Climate/'
import Energy from '../Energy'


const Dashboard = ({data}) => {
    return (
        <>
            <main className="dashboard">
                <Lights lights={data.lights} />
                <Climate climate={data.climate}/>
                <Blinds state={data.blinds}/>
                <Energy Energy={data.Energy}/>
            </main> 
            
        </>
    );
    
}

export default Dashboard;