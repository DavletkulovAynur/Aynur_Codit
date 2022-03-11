import React from "react";
import "./Main.scss";
import avatar from "../../Common/assets/img/aynur-avatar.png";
import Social from "../../Common/Components/Social/Social";

export default function Main() {
  return (
    <div className="Main">
      <div className="App-content">
      <svg xmlns="http://www.w3.org/2000/svg" height="10" width="70" viewBox="0 0 123.85 12.57"><path d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z" fill="currentColor"></path><path d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z" fill="currentColor"></path><path d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z" fill="currentColor"></path></svg>

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
          d="M0,224L26.7,208C53.3,192,107,160,160,149.3C213.3,139,267,149,320,138.7C373.3,128,427,96,480,106.7C533.3,117,587,171,640,165.3C693.3,160,747,96,800,74.7C853.3,53,907,75,960,90.7C1013.3,107,1067,117,1120,149.3C1173.3,181,1227,235,1280,224C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
