import React, { useState, useEffect } from "react";
import "./levelFinal.css";
import videoMolon from "./assets/video.mp4";
import video from "./assets/video.mp4";
import videoFinal from "./assets/video.mp4";
import { Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { property } from "lodash";
import ReactPlayer from "react-player/youtube";

export default function Level05(props) {
  const [showVideo, setShowVideo] = useState(false);
  const myCallback = () => {
    console.log("casas");
  };
  const finishEvolution = () => {
    setShowVideo(true);
  };
  return (
    <div className="eneatipoContainer">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ZbmLw_4WzAE?&autoplay=1"
        autoPlay
        width="100%"
        height="100%"
        onEnded={() => myCallback()}
        controls={true}
        playing={true}
      />
    </div>
  );
}
