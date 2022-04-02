import React from "react";
import "./style.css";

const Energy = ({ energyConsumption }) => {
  return (
    <div className="energy">
      {energyConsumption.map((item) => {
        return (
          <div className="energy__source">
            <div className="energy__icon">
              <img src={item.img} />
            </div>
            <div className="energy__consumption">
              <div className="energy__description">{item.label}</div>
              <div className="energy__value">
                {item.value}&nbsp;{item.unit}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Energy;
