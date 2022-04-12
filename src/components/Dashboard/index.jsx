import React from 'react';
import Lights from '../Lights';
//import {smartHomeData} from '../../smartHomeData';

const Dashboard = ({data}) => {

    //console.log(data.lights);

    return (
        <main className="dashboard">
            <Lights lights={data.lights} />            

            
        </main>

    )
}

export default Dashboard;