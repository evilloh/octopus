import React, { useState, useEffect } from "react";
import "./level03.css";
import { Link } from "react-router-dom";
import manina from "./maninafea.png";
import carita from "./carita.jpg";
import Home from "../levelHome/LevelHome";
import caritafea from "./caritaguapa.jpg";

export default function Level03(props) {
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
  const title = "Aprender la cultura";
  const text =
    "Le has enganchado, ahora lo es todo mantenerle con interés. Es un jovencito, seguro que con alguno de esos memes de hoy en día puedes hacerle reír! A ver que miran los jovenzuelos hoy en día...";

  return (
    <div className="maninaContainer">
      <Home text={text} title={title}></Home>

      {selectManina && (
        <div className="popupCard">
          <div className="videoContainer">
            {correctAnswer ? (
              <img className="caritaGuapa vibra" src={caritafea}></img>
            ) : (
              <img className="caritaGuapa" src={carita}></img>
            )}
            {!correctAnswer && (
              <input
                onChange={(s) => setMessage(s.target.value)}
                type="text"
                placeholder="...Velaské dime algo..."
              ></input>
            )}
            {correctAnswer && (
              <Link to="/4">
                <button className={"cupidButtonEnd buttonGL"}>
                  ¡NEXT LEVEEEEL!
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
      <img onClick={() => clickManina()} className="manina" src={manina}></img>
    </div>
  );
}
