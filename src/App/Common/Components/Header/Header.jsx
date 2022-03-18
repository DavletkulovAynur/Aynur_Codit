import React, { useState } from "react";
import "./Header.scss";
import MobileMenu from "./Components/MobileMenu";

import burger from "../../assets/img/icons/burger.svg";

export default function Header() {
  const [stateMobileMenu, setStateMobileMenu] = useState(false);
  function openMobileMenu() {
    setStateMobileMenu(true)
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      { stateMobileMenu 
        ? <MobileMenu/>
        : null
      }
      <div className="Header Header__root">
        <div className="App-content Header__box">
          <a href="" className="Header__logo">
            CODIT
          </a>
          <div onClick={openMobileMenu} className="Header__burger">
            <img src={burger} />
          </div>
          {/* <nav className="Header__nav">
            <a href="" className="Header__nav-item">About me</a>
            <a href="" className="Header__nav-item">Portfolio</a>
          </nav> */}
        </div>
      </div>
    </>
  );
}
