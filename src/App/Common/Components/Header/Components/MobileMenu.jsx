import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/mobileMenu.scss";

export default function MobileMenu({ closeMobileMenu }) {
  const test = () => {
    console.log('red')
  }
  return (
    <div className="Mobile-menu">
      <div className="Mobile-menu__button-box" onClick={closeMobileMenu}>
        <button className="Mobile-menu__button">(close this thing)</button>
      </div>
      <div className="Mobile-menu__items">
        <Link onClick={closeMobileMenu} to="/#about-me" className="Mobile-menu__item">
          About me
        </Link>
        <Link onClick={closeMobileMenu} to="/#portfolio" className="Mobile-menu__item">
          Portfolio
        </Link>
      </div>
    </div>
  );
}
