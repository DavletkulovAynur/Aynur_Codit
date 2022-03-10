import React from "react";
import "./styles/SoftSkills.scss";
import test from "../../../Common/assets/img/test.jpg";

export default function SoftSkills() {
  return (
    <div className="Soft-skills">
      {/* <h1>Soft skills</h1> */}
      <p className="Soft-skills__text">
        I'm a dad, husband, and a kid at heart. I wish I could skateboard.
      </p>
      <div className="Soft-skills__video">
        <img src={test}/>
      </div>
    </div>
  );
}
