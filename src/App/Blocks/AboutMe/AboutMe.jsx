import React from "react";
import "./About.scss";
import HardSkills from "./Components/HardSkills";
import SoftSkills from "./Components/SoftSkills";

export default function AboutMe() {
  return (
    <div className="About-me">
      <div className="App-content">
        <section className="About-me__hard-skills">
          <HardSkills/>
        </section>
        <section className="About-me__soft-skills">
          <SoftSkills/>
        </section>
      </div>
    </div>
  );
}
