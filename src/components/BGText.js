import React, { useState, useEffect } from "react";
import "./ivanchi.css";

export default function Ivanchi(props) {
  const { title, text } = props.props;
  return (
    <div className="bgTextContainer">
      <h1>{title}</h1>
      <p>{text}</p>
      <button className={"buttonGL2"} onClick={() => props.getOut()}>
        <p id="textButton">¡TOMAAAAAAAA!</p>
      </button>
    </div>
  );
}
