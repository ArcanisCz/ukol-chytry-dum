import React from "react";

import './style.css';

import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";

const Dashboard = ({data}) => (
    <main className="dashboard">
        <Lights lights={data.lights}/>
        <Climate climate={data.climate}/>
        <Blinds state={data.blinds}/>
        <Energy energyConsumption={data.energyConsumption} />
    </main>
)

export default Dashboard;