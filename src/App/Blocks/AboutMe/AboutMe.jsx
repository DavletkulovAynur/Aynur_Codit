import React from "react";
import "./About.scss";
import HardSkills from "./Components/HardSkills";
import SoftSkills from "./Components/SoftSkills";

export default function AboutMe() {
  return (
    <div className="About-me">
      <div className="App-content">
        <h1>SKILLS</h1>
        <div className="About-me__content">
          <HardSkills/>
          <SoftSkills/>
        </div>
      </div>
    </div>
  );
}
