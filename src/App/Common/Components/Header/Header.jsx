import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header Header__root">
      <div className="App-content Header__box">
        <a href="" className="Header__logo">
          CODIT
        </a>
        <nav className="Header__nav">
          <a href="" className="Header__nav-item">About me</a>
          <a href="" className="Header__nav-item">Portfolio</a>
        </nav>
      </div>
    </div>
  );
}
