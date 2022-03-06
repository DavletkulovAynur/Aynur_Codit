import React from "react";
import "./Portfolio.scss";
import euro from '../../Common/assets/img/portfolio/euro-2020.jpg'

const portfolioData = {
  firstBlock: [
    {
      id: 'euro',
      name: 'euro2020'
    },
    {
      id: 'euro',
      name: 'euro2020'
    },
    {
      id: 'euro',
      name: 'euro2020'
    },
    {
      id: 'euro',
      name: 'euro2020'
    },
  ],
  
  secondBlock: [
    {
      id: 'adventure',
      name: '85 adventures'
    },
    {
      id: 'euro',
      name: 'euro2020'
    },
  ]
}
  

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="App-content">
      <h1>PORTFOLIO</h1>
        <div className="Portfolio__cards Grid-default ">
          <section className="Grid-default">
           {portfolioData.firstBlock.map((item) => {
              return (
              <div className="Portfolio__item">
                <div className="Portfolio__item-text">
                  <h4>{item.name}</h4>
                </div>
                <div className="Portfolio__item-img"></div>
              </div>
              )
           })}
          </section>
          <section className="Grid-default">
          {portfolioData.secondBlock.map((item) => {
              return (
              <div className="Portfolio__item">
                <div className="Portfolio__item-text">
                  <h4>{item.name}</h4>
                </div>
                <div className={`Portfolio__item-img Portfolio__item-img-${item.id}`}></div>
              </div>
              )
           })}
          </section>
        </div>

        
        <p>I created STATAMIC, co-host FULL STACK RADIO, and am working on RADICAL DESIGN COURSE. I was homeschooled, live in Florida, wash dishes, shower often, learn quickly, strive to put others first, and live my life for Jesus. I'm a dad, husband, and a kid at heart. I wish I could skateboard.</p>
      </div>
    </div>
  );
}
