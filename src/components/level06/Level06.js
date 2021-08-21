import React, { useState, useEffect } from "react";
import "./level06.css";
import UIfx from "uifx";
import ReactPlayer from "react-player/youtube";
import Home from "../levelHome/LevelHome";
import layout from "./assets/layout.png";
import foca from "./assets/foca.gif";
import papere from "./assets/papere.gif";
import ugino from "./assets/ugino.gif";
import perra from "./assets/perra.gif";
import flamingo from "./assets/flamingo.gif";
import tigres from "./assets/tigres.gif";
import uginoAudio from "./assets/ugino.mp3";
import perraAudio from "./assets/perra.mp3";
import campeonesAudio from "./assets/campeones.mp3";
import papereAudio from "./assets/papere.mp3";
import auguriAudio from "./assets/auguri.mp3";
import focaAudio from "./assets/foca.mp3";
import ivanBack from "./assets/ivanback.gif";
import anime from "animejs";

export default function Level05(props) {
  const [hp, setHp] = useState(15);
  const [yourHp, setYourHp] = useState(18);
  const [src, setSrc] = useState(ugino);
  const [isWon, setIsWon] = useState(false);
  const audio1 = new UIfx(uginoAudio);
  const audio2 = new UIfx(perraAudio);
  const audio3 = new UIfx(campeonesAudio);
  const audio4 = new UIfx(papereAudio);
  const audio5 = new UIfx(auguriAudio);
  const audio6 = new UIfx(focaAudio);
  const [enemyNumber, setEnemyNumber] = useState("1");
  const [enemyName, setEnemyName] = useState("Ugino");

  const calculateEnemyNumber = (num) => {
    if (enemyNumber === "6") {
      setIsWon(true);
    }
    let nextEnemy = Math.floor(num) + 1;

    return (nextEnemy = String(nextEnemy));
  };

  const calculateEnemyName = (num) => {
    switch (num) {
      case "1":
        return "Perra";
      case "2":
        return "Tigres Y Leones";
      case "3":
        return "Papera";
      case "4":
        return "Flamingo";
      case "5":
        return "Foca";

      default:
        break;
    }
  };
  const calculateEnemySrc = (num) => {
    switch (num) {
      case "1":
        return setSrc(perra);
      case "2":
        return setSrc(tigres);
      case "3":
        return setSrc(papere);
      case "4":
        return setSrc(flamingo);
      case "5":
        return setSrc(foca);

      default:
        break;
    }
  };

  const nextEnemy = () => {
    animationRef.current = anime({
      targets: ".enemyImg",
      translateX: 10,
      translateY: -40,
      duration: 1000,
      direction: "alternate",
      easing: "easeInOutSine",
      keyframes: [
        { translateY: -60, opacity: 1 },
        { translateY: 250, opacity: 0 },
      ],
    });
    setTimeout(() => {
      calculateEnemySrc(enemyNumber);
    }, 1000);
    setHp(15);
    setEnemyNumber(calculateEnemyNumber(enemyNumber));
    setEnemyName(calculateEnemyName(enemyNumber));
  };
  const animationRef = React.useRef(null);

  useEffect(() => {
    if (hp <= 0) {
      nextEnemy();
    }

    animationRef.current = anime({
      targets: ".enemyImg",
      translateX: 10,
      translateY: -40,
      duration: 60,
      direction: "alternate",
      easing: "easeInOutSine",
    });
  }, [hp]);

  useEffect(() => {
    if (isWon) {
      props.history.push("/final");
    }
  }, [isWon]);

  const title = "The last stand";
  const text =
    "Ya casi estás! Ya puedes ver el final y por fin volver a ser como eras antes! Pero... espera! Hay una serie de animales que te están impidiendo el camino! Derrotalos con las armas correctas para continuar!";

  const makeSound = (who) => {
    switch (who) {
      case "1":
        return audio1.play();
      case "2":
        return audio2.play();
      case "3":
        return audio3.play();
      case "4":
        return audio4.play();
      case "5":
        return audio5.play();
      case "6":
        return audio6.play();

      default:
        break;
    }
  };

  const burn = (who) => {
    if (who === enemyNumber) {
      setHp(hp - 8);
      return makeSound(who);
    }
    if (yourHp !== 1) {
      alert(
        "Cuidado! No has elegido la acción correcta y el enemigo te devuelve el golpe!"
      );
    }
    setHp(hp - 1);
    if (yourHp === 1) {
      return alert(
        "Andayámujé, estas en serio perdiendo contra " + enemyName + "??"
      );
    }
    setYourHp(yourHp - 1);
    makeSound(who);
  };

  return (
    <div className="animalsContainer">
      <Home text={text} title={title}></Home>
      <div className="playerContainer">
        <div className="infoEnContainer">
          <p>{enemyName}</p>
          <p>lv: 5</p>
          <div className="hp">
            <p>hp: </p>
            <progress
              className="progressplayer"
              id="playerhealth"
              value={hp}
              max="15"
            ></progress>
          </div>
          <p>hp: {hp}/15</p>
        </div>
        <img className={"ivanchiGif2 enemyImg"} src={src}></img>
      </div>
      <div className="playerContainer">
        <img className={"ivanchiGif2"} src={ivanBack}></img>
        <div className="infoPgContainer">
          <p>Ivan McFlay</p>
          <p>lv: 5</p>
          <div className="hp">
            <p>hp: </p>
            <progress
              className="progressplayer"
              id="playerhealth"
              value={yourHp}
              max="18"
            ></progress>
          </div>
          <p>hp: {yourHp}/18</p>
        </div>
      </div>
      <div className="choicesContainer">
        <div className="choiceFixer">
          <div className="choice" onClick={() => burn("3")}>
            <p>No eres el campeon</p>
          </div>
          <div className="choice" onClick={() => burn("2")}>
            <p>Ponte el bozal</p>
          </div>
          <div className="choice" onClick={() => burn("6")}>
            <p>Ahahah</p>
          </div>
        </div>
        <div className="choiceFixer">
          <div className="choice" onClick={() => burn("1")}>
            <p>No te la lleves</p>
          </div>
          <div className="choice" onClick={() => burn("4")}>
            <p>¡Piangete!</p>
          </div>
          <div className="choice" onClick={() => burn("5")}>
            <p>¡Auguri!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
