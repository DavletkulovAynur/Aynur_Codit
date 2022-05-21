import React from "react";
import PortfolioBlock from "./PortfolioBlock";

export default function PortfolioCards({ cards }) {
  return (
    <>
      <div className="Portfolio__cards Grid-default">
        {cards.map((item, index) => {
          return (
            <div key={index}>
              <PortfolioBlock itemData={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
