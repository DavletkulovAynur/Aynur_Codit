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
          <h2 className="AppListing-author">Made by Aynur Codit</h2>
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
    </div>
  );
};
