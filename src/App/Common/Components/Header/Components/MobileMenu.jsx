import React from "react";

export default function MobileMenu({closeMobileMenu}) {
  return (
    <div className="Mobile-menu">
      <div className="Mobile-menu__button-box" onClick={closeMobileMenu}>
        <button className="Mobile-menu__button">(close this thing)</button>
      </div>
      <div className="Mobile-menu__items">
        <p className="Mobile-menu__item">About me</p>
        <p className="Mobile-menu__item">Portfolio</p>
      </div>
    </div>
  );
}
