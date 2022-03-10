import React from "react";
import "./styles/HardSkills.scss";

const skillsData = [
  {
    name: 'JavaScript',
    knowledge: '80'
  },
  {
    name: 'HTML/SCSS',
    knowledge: '90'
  },
  {
    name: 'React/Redux',
    knowledge: '80'
  },
  {
    name: 'Node/Express',
    knowledge: '55'
  },
  {
    name: 'Test',
    knowledge: '50'
  }
]

export default function HardSkills() {
  return (
    <div>
      <h1>Hard skills</h1>
      <div className="Skills">
        {skillsData.map((item, index) => {
          return (
            <section key={index} className="Skills__item">
              <h4 className="Skills__item-title">{item.name}</h4>
              <div className="Skills__item-line">
                <div className="Skills__item-fill" style={{width: `${item.knowledge}%`}}></div>
              </div>
          </section>
          )
        })}
      </div>
    </div>
  );
}
