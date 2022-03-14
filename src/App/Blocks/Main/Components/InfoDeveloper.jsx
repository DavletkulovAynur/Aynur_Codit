import React from "react";
import avatar from "../../../Common/assets/img/aynur-avatar.png";
import "./styles/InfoDeveloper.scss";

export default function InfoDeveloper() {
  return (
    <div className="Info-developer">
      <section className="Info-developer__avatar">
        <img className="Info-developer__avatar-img" src={avatar} />
      </section>
      <section className="Info-developer__about">
        <h1 className="Info-developer__name">Aynur Codit</h1>
        <h3 className="Info-developer__about-text">I`m a frontend developer</h3>
      </section>
    </div>
  );
}
