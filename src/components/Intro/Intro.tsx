import React from "react";
import "./Intro.css";

import introVideo from "../../assets/videos/meal.mp4";

function Intro() {
  return (
    <div className="intro_video">
      <video src={introVideo} muted loop autoPlay />
    </div>
  );
}

export default Intro;
