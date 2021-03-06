import React from "react";
import "./Main.scss";

import Social from "../../Common/Components/Social/Social";
import InfoDeveloper from "./Components/InfoDeveloper";

import mainSeparator from '../../Common/assets/img/separators/main.svg'

export default function Main() {
  return (
    <div className="Main Main__root">
      <div className="App-content">
          <InfoDeveloper/>
          <div className="Main__social">
          
            <Social/>
          </div>
      </div>
      <img id="portfolio" className="Main__separator" src={mainSeparator}/>
    </div>
  );
}
