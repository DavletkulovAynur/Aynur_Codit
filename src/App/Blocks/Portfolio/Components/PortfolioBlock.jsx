import React from "react";
import "./styles/PortfolioBlock.scss";

import Plashka from "../../../Common/Components/Plashka/Plashka";

export default function PortfolioBlock({ itemData }) {
  const { id, name, plashka } = itemData;

  return (
    <div className="Portfolio__item">
      <div className="Portfolio__item-text">
        <h4 className="text">{name}</h4>
        <Plashka data={plashka} />
      </div>
      <div className={`Portfolio__item-img Portfolio__item-img-${id}`}></div>
    </div>
  );
}
