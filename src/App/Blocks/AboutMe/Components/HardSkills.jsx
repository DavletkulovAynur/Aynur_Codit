import React from "react";
import "./styles/HardSkills.scss";
import developer from "../../../Common/assets/img/developer.png";

const skillsData = [
  {
    name: "JavaScript/TS",
    knowledge: "95",
    text: `i know closure and OOP 😎`,
  },
  {
    name: "HTML/SCSS",
    knowledge: "90",
  },
  {
    name: "React",
    knowledge: "90",
    text: `I'am able to built from scratch platform for managing platform's database entities and users using React, Node.js (Express/Nest), and Mongoose. Implemented complex UI components with React/TypeScript and SCSS.`,
  },
  {
    name: "Mobx/Redux",
    knowledge: "85",
  },
  {
    name: "Express/Nest",
    knowledge: "65",
    },
  {
    name: "Docker",
    knowledge: "55",
  },
  {
    name: "Mongo",
    knowledge: "50",
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
