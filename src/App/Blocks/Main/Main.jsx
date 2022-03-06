import React from "react";
import "./Main.scss";
import avatar from "../../Common/assets/img/aynur-avatar.png";
import Social from "../../Common/Components/Social/Social";


export default function Main() {
  return (
    <div className="Main">
      <header></header>
      <div className="App-content">
        <div className="test">
          <section className="Avatar">
            <img className="Avatar__img" src={avatar} />
          </section>
          <section>
            <h1>Aynur Codit</h1>
            <h3>I`m a frontend developer</h3>
          </section>
          <Social/>
        </div>
      </div>
      <svg
        class="w-full block-edge text-aqua relative z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          fill-opacity="1"
          d="M0,224L26.7,208C53.3,192,107,160,160,149.3C213.3,139,267,149,320,138.7C373.3,128,427,96,480,106.7C533.3,117,587,171,640,165.3C693.3,160,747,96,800,74.7C853.3,53,907,75,960,90.7C1013.3,107,1067,117,1120,149.3C1173.3,181,1227,235,1280,224C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
