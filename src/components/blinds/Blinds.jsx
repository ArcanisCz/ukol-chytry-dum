import React, { useState } from "react";
import "./style.css";
import blindsClosed from "./images/blinds-closed.svg";
import blindsOpen from "./images/blinds-open.svg";

const Blinds = ({ blinds }) => {
  const [blindsState, setBlindsState] = useState(blinds);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blindsState === "open" ? blindsOpen : blindsClosed} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={
            blindsState === "open" ? "button--active button" : "button"
          }
          onClick={() => setBlindsState("open")}
        >
          Otevřeno
        </button>
        <button
          className={
            blindsState === "closed" ? "button--active button" : "button"
          }
          onClick={() => setBlindsState("closed")}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
