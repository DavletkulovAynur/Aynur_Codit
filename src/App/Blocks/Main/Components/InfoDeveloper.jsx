import React from "react";
import avatar from "../../../Common/assets/img/aynur-avatar.png";
import "./styles/InfoDeveloper.scss";
import arrow from "../../../Common/assets/img/icons/arrow.svg";

const arrowsData = [
  {
    title: "That's me",
    position: 'left',
  },
  {
    title: "I almost always smile because the optimist in life",
    position: 'top',
  },
  {
    title: "I’m almost never not wearing t-shirts because collars get in the way.",
    position: 'right',
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
      {arrowsData.map((item, index) => {
        return (
        <div key={index} className={`Info-developer__arrow-about Info-developer__${item.position}`}>
          <p className="Info-developer__arrow-about-title">{item.title}</p>
          <img className="Info-developer__arrow-about-icon" src={arrow}/>
        </div>
        )
      })}
    </>
  )
}
