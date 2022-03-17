import React from "react";
import "./Portfolio.scss";
import Plashka from "../../Common/Components/Plashka/Plashka";

const portfolioData = {
  firstBlock: [
    {
      id: 'euro',
      name: 'euro2020',
      plashka: {
        name: 'Russia today',
        color: 'green'
      },
    },
    {
      id: 'online-store',
      name: 'online store',
      plashka: {
        name: 'Pet Project',
        color: 'yellow'
      },
    },
    {
      id: 'olympics',
      name: '2022 Olympics',
      plashka: {
        name: 'Russia today',
        color: 'green'
      },
    },
    {
      id: 'doctor',
      name: 'Akbars med',
      plashka: {
        name: 'Technaxis',
        color: 'green'
      },
    },
  ],
  
  secondBlock: [
    {
      id: 'adventure',
      name: '85 adventures',
      plashka: {
        name: 'Russia today',
        color: 'green'
      },
    },
    {
      id: 'collection',
      name: 'Collection',
      plashka: {
        name: 'Pet Project',
        color: 'yellow'
      },
    },
  ]
}
  

export default function Portfolio() {
  return (
    <div className="Portfolio Portfolio__root">
      <div className="App-content">
      <p className="Portfolio__title">I created STATAMIC, co-host FULL STACK RADIO, and am working on RADICAL DESIGN COURSE. I was homeschooled, live in Florida, wash dishes, shower often, learn quickly, strive to put others first, and live my life for Jesus. I'm a dad, husband, and a kid at heart. I wish I could skateboard.</p>
        <div className="Portfolio__cards Grid-default ">
          <section className="Grid-default">
           {portfolioData.firstBlock.map((item) => {
              return (
              <div className="Portfolio__item">
                <div className="Portfolio__item-text">
                  <h4 className="text">{item.name}</h4>
                  <Plashka data={item.plashka}/>
                </div>
                <div className={`Portfolio__item-img Portfolio__item-img-${item.id}`}></div>
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
                  <Plashka data={item.plashka}/>
                </div>
                <div className={`Portfolio__item-img Portfolio__item-img-${item.id}`}></div>
              </div>
              )
           })}
          </section>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,96C672,128,768,192,864,202.7C960,213,1056,171,1152,128C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
}
