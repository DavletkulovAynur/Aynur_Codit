import React from "react";
import { portfolioData } from "../config";
import PortfolioBlock from "./PortfolioBlock";

export default function PortfolioCards() {
  return (
    <>
      <div className="Portfolio__cards Grid-default">
        {portfolioData.map((item, index) => {
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
