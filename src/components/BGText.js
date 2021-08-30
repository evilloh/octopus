import React, { useState, useEffect } from "react";
import "./ivanchi.css";
import { Link } from "react-router-dom";

export default function Ivanchi(props) {
  const { title, text, firstLevel } = props.props;
  return (
    <div className="bgTextContainer">
      <h1>{title}</h1>
      <p>{text}</p>
      {!firstLevel ? (
        <button className={"buttonGL2"} onClick={() => props.getOut()}>
          <p id="textButton">¡TOMAAAAAAAA!</p>
        </button>
      ) : (
        <Link to="/1">
          <button className={"buttonGL2"} onClick={() => props.getOut()}>
            <p id="textButton">¡Vamooos!</p>
          </button>
        </Link>
      )}
    </div>
  );
}
