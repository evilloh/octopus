import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import "./level02.css";
import ivanchi from "../../assets/ivangif2.gif";
import Home from "../levelHome/LevelHome.js";

export default function Level02() {
  useEffect(() => {
    document.title = `Second!`;
  }, []);

  const cards = [
    {
      src: "https://cdn.akamai.steamstatic.com/steam/apps/1325800/capsule_616x353.jpg?t=1598264159",
      videoSrc: "https://www.youtube.com/embed/UlpIzDIF2Ys?&autoplay=1",
      right: false,
      name: "viticulture",
    },
    {
      src: "https://images-na.ssl-images-amazon.com/images/I/51luww7a0gL._AC_.jpg",
      videoSrc: "https://www.youtube.com/embed/jtKnx_z4wgk?&autoplay=1",
      right: true,
      name: "cerebria",
    },
    {
      src: "https://ghenosgames.com/wp-content/uploads/products/GHE071_1.jpg",
      videoSrc: "https://www.youtube.com/embed/4Js1B57jZ7s?&autoplay=1",
      right: false,
      name: "terraforming",
    },
    {
      src: "https://i.ytimg.com/vi/c68E44X5OP4/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/embed/h-DE58piARY?&autoplay=1",
      right: false,
      name: "altiplano",
    },
  ];

  const title = "Elige bien";
  const text =
    "Gracias a la flecha carnosa de cupido os habeís podido conocer, pero ahora te toca engancharlo! Dice que le gusta jugar a cosas, a ver si eliges bien y le enganchas con algun juego de mesa!";

  return (
    <div className="level02Container">
      <Home text={text} title={title}></Home>

      <div className="level02ContainerCards">
        {cards.map((card) => (
          <Card card={card}></Card>
        ))}
      </div>
      <div className="level02TextContainer">
        <h1>Elige el juego</h1>
        <h3>
          Ahora tienes la oportunidad de aprenderte un juego nuevo para
          progresar al siguiente nivel
        </h3>
        <h3> ¡Elige con cuidado!</h3>
        <img className={"ivanchiGif2"} src={ivanchi}></img>
      </div>
    </div>
  );
}
