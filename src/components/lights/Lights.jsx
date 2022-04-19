import React, { useReducer } from "react";
import Light from "../light/Light";
import "./style.css";

function toggleLights(state, action) {
  switch (action.type) {
    case "toggle":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.state = switchLightState(item.state);
        }
        return item;
      });
    case "remove":
      return state.filter((item) => {
        return item.id != action.payload.id;
      });
    default:
      throw new Error("Action not found");
  }
}

const switchLightState = (state) => {
  return state === "on" ? "off" : "on";
};

const Lights = ({ lights }) => {
  const [state, dispatch] = useReducer(toggleLights, lights);

  return (
    <div className="lights">
      {state.map((item) => (
        <Light
          name={item.name}
          state={item.state}
          key={item.id}
          id={item.id}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Lights;
