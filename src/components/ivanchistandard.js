import React, { useState, useEffect } from "react";
import "./ivanchi.css";
import { Link } from "react-router-dom";
import ivanchi from "../assets/ivangif.gif";

export default function Ivanchi(props) {
  const [selectManina, setSelectManina] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [message, setMessage] = useState("");
  const clickManina = () => {
    setSelectManina(true);
  };

  useEffect(() => {
    const loweredMessage = message.toLowerCase();
    if (loweredMessage == "guapa" || loweredMessage == "carita guapa") {
      setCorrectAnswer(true);
    }
  }, [message]);

  return (
    <div className="bounceDown bounce">
      <img className="ivanchiGif bounce" src={ivanchi}></img>
    </div>
  );
}
