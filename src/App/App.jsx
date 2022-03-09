import React from "react";
import "./App.scss";
import AboutMe from "./Blocks/AboutMe/AboutMe";
import Main from "./Blocks/Main/Main";
import Portfolio from "./Blocks/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
     <Main/>
     <Portfolio/>
     <AboutMe/>
    </div>
  );
}

export default App;
