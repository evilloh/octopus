import React, { useState, useEffect } from "react";
import "./levelHome.css";
import { Link } from "react-router-dom";
import Ivanchi from "../ivanchistandard.js";
import BGText from "../BGText.js";

export default function Home(props) {
  const [style, setStyle] = useState({
    width: "100vw",
    height: "100vh",
  });

  const getOut = () => {
    setStyle({
      width: "0vw",
      height: "0vh",
      opacity: 0,
      display: "none",
    });
  };

  return (
    <div className="superHome" style={style}>
      <BGText getOut={getOut} props={props}></BGText>
      <Ivanchi></Ivanchi>
    </div>
  );
}
