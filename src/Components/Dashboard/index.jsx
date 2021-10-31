import React from 'react';

import Climate from '../Climate';

import Energy from '../Energy';

import Blinds from '../Blinds';

import Lights from '../Lights';

import smartHomeData from '../../smartHomeData';

const Dashboard = () => {
  return (
    <>
      <main className="dashboard">
        <Lights lights={smartHomeData.lights} />
        <Climate />
        <Blinds />
        <Energy />
      </main>
    </>
  );
};

export default Dashboard;
