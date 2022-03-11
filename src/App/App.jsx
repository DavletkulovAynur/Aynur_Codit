import React from "react";
import "./App.scss";
import AboutMe from "./Blocks/AboutMe/AboutMe";
import Main from "./Blocks/Main/Main";
import Portfolio from "./Blocks/Portfolio/Portfolio";
import Footer from "./Common/Components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Main/>
     <Portfolio/>
     <AboutMe/>
     <Footer/>
    </div>
  );
}

export default App;
