import React from "react";
import { render } from "react-dom";

import "./style.css";
import smartHomeData from "./smartHomeData"

import Header from "./Components/header";
import Dashboard from "./Components/dashboard";

const App = () => (
  <div className="container">
    <Header title={"Chytrý dům"} />
    <Dashboard data={smartHomeData} />
  </div>
);

render(<App />, document.querySelector("#app"));
