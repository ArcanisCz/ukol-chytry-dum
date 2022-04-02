import React, { useReducer } from "react";
import "./style.css";
import lightOff from "./images/light-off.svg";
import lightOn from "./images/light-on.svg";

const Light = ({ name, state, id, dispatch }) => {
  const getStateAsBoolean = (state) => {
    return state === "on" ? true : false;
  };

  return (
    <div className="light">
      <div
        className="light__item"
        onClick={() => dispatch({ type: "toggle", payload: { id: id } })}
      >
        <div className="light__icon">
          <img src={getStateAsBoolean(state) ? lightOn : lightOff} />
        </div>
        <div className="light__name">{name}</div>
      </div>
      <button
        className="light__btn button"
        onClick={() => dispatch({ type: "remove", payload: { id: id } })}
      >
        X
      </button>
    </div>
  );
};

export default Light;
