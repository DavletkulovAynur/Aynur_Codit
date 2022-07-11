import React from "react";
import "./YulYortTaxi.scss";
import taxi from "../../Common/assets/img/portfolio/taxi.png";

export const YulYortTaxi = () => {
  return (
    <div className="Portfolio-item Portfolio-item__root">
      <div className="Portfolio-item__cover-wrapper">
        <img className="Portfolio-item__cover" src={taxi} />
      </div>
      <div className="AppList">
        <div className="AppListing">
        <div className="AppListing-body">
          <h1 className="AppListing-title">Yul Yort taxi</h1>
          <p className="AppListing-text">Crank it yo! Master the waves and hang ten in Whitewater Wipeout! This wave crashing, high score chasing, crank-tastic experience is inspired by the classic California Games. Experience surfing in an innovative new way while performing sick tricks using the Playdate's unique crank. Perform daring 360’s, gnarly DOUBLE 360s all while avoiding the shark. Will you rise in the ranks of the global leaderboards or fall prey to the wave? Get Whitewater Wipeout only on the Playdate!</p>
          <section>
            <h3 className="AppListing-author">More info from the Developer</h3>
            <ul className="AppListing-list">
              <li className="AppListing-link">
                <a className="AppListing-external" href="mailto:ainurikdav@gmail.com">@ainurikdav@gmail.com</a>
              </li>
            </ul>
          </section>
        </div>
        <div className="AppListing-meta">
          <ul>
            <li>
              <label>
                <img src="https://media-fastly.play.date/media/games/com.vitei.whitewater/Whitewater-Wipeout-1.png" alt="" />
              </label>
            </li>
            <li>
              <label>
                <img src="https://media-fastly.play.date/media/games/com.vitei.whitewater/Whitewater-Wipeout-2.png" alt="" />
              </label>
            </li>
            <li>
              <label>
                <img src="https://media-fastly.play.date/media/games/com.vitei.whitewater/Whitewater-Wipeout-4.png" alt="" />
              </label>
            </li>
          </ul>
          
          
        </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fd2c78"
          fillOpacity="1"
          d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,96C672,128,768,192,864,202.7C960,213,1056,171,1152,128C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
