import React, { useState, useEffect } from "react";
import "./level05.css";
import ReactPlayer from "react-player/youtube";

export default function Level05(props) {
  const myCallback = () => {
    props.history.push("/6");
  };

  return (
    <div className="eneatipoContainer">
      <ReactPlayer
        url="https://www.youtube.com/embed/5RcuAzmbcBc?&autoplay=1"
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
