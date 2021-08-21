import React, { useState, useEffect } from "react";
import "./levelFinal.css";
import videoMolon from "./assets/video.mp4";
import video from "./assets/video.mp4";
import videoFinal from "./assets/video.mp4";
import { Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { property } from "lodash";

export default function Level05(props) {
  const [showVideo, setShowVideo] = useState(false);
  const myCallback = () => {
    console.log("casas");
  };
  const finishEvolution = () => {
    setShowVideo(true);
  };
  return (
    <div className="finalContainer">
      <h1 className="finalTitle">LEVEL STILL LOCKED, TRY AGAIN LATER!</h1>
      <video className="videino" controls onEnded={() => myCallback()}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
