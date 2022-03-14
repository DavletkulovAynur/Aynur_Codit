import React from "react";
import avatar from "../../../Common/assets/img/aynur-avatar.png";
import "./styles/InfoDeveloper.scss";
import arrow from "../../../Common/assets/img/icons/arrow.svg";

const arrowsData = [
  {
    title: "That's me"
  },
  {
    title: "I do this faux hawk thing to draw attention away from my receding hairline."
  },
  {
    title: "I’m almost never not wearing t-shirts because collars get in the way of turning my rippling, muscle-bound neck."
  },
]

export default function InfoDeveloper() {
  return (
    <div className="Info-developer">
      <ArrowsBlock/>
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

function ArrowsBlock() {
  return (
    <>
      <div></div>
      <div className="Info-developer__arrow-about">
        <p className="Info-developer__arrow-about-title">That's me</p>
        <img className="Info-developer__arrow-about-icon" src={arrow}/>
      </div>
    </>
  )
}
