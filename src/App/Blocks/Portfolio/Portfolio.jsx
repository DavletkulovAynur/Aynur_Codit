import React from "react";
import "./Portfolio.scss";

import Title from "./Components/Title";
import PortfolioCards from "./Components/PortfolioCards";
import PortfolioFooter from "./Components/PortfolioFooter";
import { PortfolioVM } from "../../viewModel";
  

export default function Portfolio() {
  const portfolioBlock = new PortfolioVM
  
  return (
    <div className="Portfolio Portfolio__root">
      <div className="App-content Portfolio_content">
        <Title/>
        <PortfolioCards cards={portfolioBlock.portfolioData}/>
      </div>
      <PortfolioFooter/>
    </div>
  );
}
