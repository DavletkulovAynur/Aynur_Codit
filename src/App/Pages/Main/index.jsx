import React from "react";
import AboutMe from "../../Blocks/AboutMe/AboutMe";
import Main from "../../Blocks/Main/Main";
import Portfolio from "../../Blocks/Portfolio/Portfolio";

export const MainPage = () => {
  return (
    <div>
      <Main/>
      <Portfolio/>
      <AboutMe/>
    </div>
  );
};

