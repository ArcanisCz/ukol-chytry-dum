import React, { useState } from "react";
import "./style.css";
import offUrl from "./light-off.svg";
import onUrl from "./light-on.svg";

const Light = ({ name, state }) => {
  const [isOn, setIsOn] = useState(state);

  const handleClick = () => {
    isOn === "off" ? setIsOn("on") : setIsOn("off");
  };

  return (
    <div className="light" onClick={handleClick}>
      <div className="light__icon">
        <img
          src={isOn === "off" ? offUrl : onUrl}
          alt={isOn === "off" ? "Light is off" : "Light is on"}
        />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
