import React from "react";
import "./styles/HardSkills.scss";
import developer from "../../../Common/assets/img/developer.png";
import spaceProgrammist from "../../../Common/assets/img/space-programmist.png";

const skillsData = [
  {
    name: "JavaScript",
    knowledge: "90",
    text: `I think I have fully mastered JavaSript. On clean wrote OOP project`,
  },
  {
    name: "HTML/SCSS",
    knowledge: "85",
  },
  {
    name: "React/Redux",
    knowledge: "85",
    text: `I wrote these articles recently & aligned this text to the right for no real reason other than to mess with you`,
  },
  {
    name: "Node/Express",
    knowledge: "55",
    text: `I wrote these articles recently & aligned this text to the right for no real reason other than to mess with you`,
  },
  {
    name: "Algorithms",
    knowledge: "40",
  },
];

export default function HardSkills() {
  return (
    <div className="Hard-skills Hard-skills__root">
      <img className="Hard-skills__img" src={developer} />
      <div className="Hard-skills__content">
      {/* Тут написать про то что умею поднимать программы на чистом js react/redux/mobx могу что в backend */}

      
        {/* <p className="Hard-skills__title">
          I wrote these articles recently & aligned this text to the right for
          no real reason other than to mess with you
        </p> */}
        <div className="Skills">
          {skillsData.map((item, index) => {
            return (
              <section key={index} className="Skills__item">
                {item.text 
                  ? <p className="Skills__item-text">{item.text}</p>
                  : null
                }
                <div className="Skills__item-graphic-element">
                  <h4 className="Skills__item-title">{item.name}</h4>
                  <div className="Skills__item-line">
                    <div
                      className="Skills__item-fill"
                      style={{ width: `${item.knowledge}%` }}
                    ></div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
