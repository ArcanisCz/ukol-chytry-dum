import React from "react";
import Blinds from "../blinds/Blinds";
import Climate from "../climate/Climate";
import Energy from "../energy/Energy";
import Lights from "../lights/Lights";
import "./style.css";

const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate climate={data.climate} />
      <Blinds blinds={data.blinds} />
      <Energy energyConsumption={data.energyConsumption} />
    </main>
  );
};

export default Dashboard;
