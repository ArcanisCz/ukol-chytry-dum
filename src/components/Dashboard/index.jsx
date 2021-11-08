import React from "react";
import Lights from '../Lights'
import Climate from '../Climate'
import Blinds from "../Blinds";
import Energy from "../Energy";

//import 'style.css'

const Dashboard = ({data}) => {
    return (   
        <main className="dashboard">
            <div className="lights">
                
                        <Lights lights = {data.lights}/>
               
            </div>

            <Climate temperature = {data.climate.temperature} humidity = {data.climate.humidity} />
            <Blinds state = {data.blinds} />
            <Energy electricity = '36.7 kW' water = '14.1' />

            
        </main>
    )
}

export default Dashboard;