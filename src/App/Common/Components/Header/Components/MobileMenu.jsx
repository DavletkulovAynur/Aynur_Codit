import React from "react";

export default function MobileMenu({closeMobileMenu}) {
  return (
    <div className="Mobile-menu">
      <div className="Mobile-menu__button-box" onClick={closeMobileMenu}>
        <button className="Mobile-menu__button">(close this thing)</button>
      </div>
      <div></div>
    </div>
  );
}
