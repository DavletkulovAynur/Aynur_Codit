import React from "react";
import "./YulYortTaxi.scss";
import taxi from '../../Common/assets/img/portfolio/taxi.png'

export const YulYortTaxi = () => {
  return (
    <div className="Portfolio-item Portfolio-item__root">
      <img className="Portfolio-item__cover" src={taxi}/>
    </div>
  );
};
