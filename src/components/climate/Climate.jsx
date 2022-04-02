import React, { useReducer } from "react";
import temp from "./images/temp.svg";
import "./style.css";

function changeTemperature(state, action) {
  switch (action.type) {
    case "increment":
      return { temperatureValue: state.temperatureValue + 1 };
    case "decrement":
      return { temperatureValue: state.temperatureValue - 1 };
    default:
      throw new Error();
  }
}

const checkTemperature = (temperature) => {
  let color;
  if (temperature <= 17) {
    color = "blue";
  } else if (temperature >= 25) {
    color = "red";
  } else {
    color = "black";
  }
  return color;
};

const Climate = ({ climate }) => {
  const { temperature, humidity } = climate;
  const [state, dispatch] = useReducer(changeTemperature, {
    temperatureValue: temperature,
  });

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temp} />
      </div>
      <div className="climate__content">
        <div
          className="climate__temperature"
          style={{ color: checkTemperature(state.temperatureValue) }}
        >
          {state.temperatureValue}&deg;C
        </div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button
          className="button"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;
