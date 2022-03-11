import React from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <div className="Header Header__root">
      <div className="App-content Header__box">
        <div className="Header__logo">
          CODIT
        </div>
        <nav className="Header__nav">
          <div className="Header__nav-item">About me</div>
          <div className="Header__nav-item">Portfolio</div>
        </nav>
      </div>
    </div>
  );
}
