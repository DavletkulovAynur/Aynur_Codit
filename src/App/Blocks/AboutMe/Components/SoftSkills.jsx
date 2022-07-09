import React from "react";
import "./styles/SoftSkills.scss";
import playButton from '../../../Common/assets/img/icons/play-button.svg'

export default function SoftSkills() {
  return (
    <div className="Soft-skills">
      {/* <h1>Soft skills</h1> */}
      <p className="Soft-skills__text">
      My hobby is making videos and flying a quadcopter
      </p>
      <div className="Soft-skills__video">
        <div className="Soft-skills__video-box">
          <a href="https://www.youtube.com/watch?v=mhX5xsu_TrU" target="_blank" className="Soft-skills__video-img">
            <img src={playButton} alt="play button" className="Soft-skills__video-play-icons"/>
          </a>
        </div>
      </div>
    </div>
  );
}
