import React from "react";
import "./YulYortTaxi.scss";
import taxi from "../../Common/assets/img/portfolio/taxi.png";

export const YulYortTaxi = () => {
  return (
    <div className="Portfolio-item Portfolio-item__root">
      <div className="Portfolio-item__cover-wrapper">
        <img className="Portfolio-item__cover" src={taxi} />
      </div>
      <div className="test">
        <div className="App-content test1">
          <h1>Yul Yort taxi</h1>
        </div>
      </div>
    </div>
  );
};
