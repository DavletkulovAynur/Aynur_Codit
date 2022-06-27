import React, { useState } from "react";

import {Link} from "react-router-dom"
import "./Header.scss";
import MobileMenu from "./Components/MobileMenu";

import burger from "../../assets/img/icons/burger.svg";



export default function Header() {
  const [stateMobileMenu, setStateMobileMenu] = useState(false);
  
  function openMobileMenu() {
    setStateMobileMenu(true)
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    setStateMobileMenu(false)
    document.body.style.overflow = "auto";
  }

  return (
    <>
      { stateMobileMenu 
        ? <MobileMenu closeMobileMenu={closeMobileMenu}/>
        : null
      }
      <div className="Header Header__root">
        <div className="App-content Header__box">
          <Link to="/" className="Header__logo">
           CODIT/
          </Link>
          <div onClick={openMobileMenu} className="Header__burger">
            <img src={burger} />
          </div>
          <nav className="Header__nav">
            <a href="#about-me" className="Header__nav-item">About me</a>
            <a href="#portfolio" className="Header__nav-item">Portfolio</a>
          </nav>
        </div>
      </div>
    </>
  );
}
