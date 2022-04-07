import React from "react";
import "./Portfolio.scss";

import Title from "./Components/Title";
import PortfolioCards from "./Components/PortfolioCards";
import PortfolioFooter from "./Components/PortfolioFooter";
  

export default function Portfolio() {
  
  return (
    <div className="Portfolio Portfolio__root">
      <div className="App-content">
        <Title/>
        <PortfolioCards/>
      </div>
      <PortfolioFooter/>
    </div>
  );
}
