import React, { useState, useEffect } from "react";
import "./level0.css";
import { Link } from "react-router-dom";
import background from "./background.jpg";
import Home from "../levelHome/LevelHome";

export default function Level0(props) {
  const [next, setNext] = useState(false);

  const title = "Querido Ivan";
  const text =
    "Para volver a tu forma original tendrás que superar los niveles que se te pondrán delante. Unas pruebas que trazan el recorrido de vuestra relación! Podrá tú amor llevarte al final del barbatruco?    ";

  return (
    <div className="level0Container">
      <div className="spellContainer">
        <p>"Para que sea cariñoso pétalos de rosa </p>
        <p> Para que sea guapo alas de mariposa </p>
        <p> Dos lagrimas para que te haga llorar </p>
        <p> Pero solo por bien así que y me toca salar </p>
        <p> En sentido del reloj remuevo tres veces </p>
        <p>Para que sea pollon le echo dos peces </p>
        <p> Lo dejo reposar una noche bajo la luna</p>
        <p> Invoco tu poder mi diosa Unna" </p>
        <p> Pero mientras Alessio estaba apunto de acabar </p>
        <p> Alguien con furor la puerta empezó a tocar </p>
        <p> Se levantó con prisa y se fue asustado </p>
        <p> Y que se caiera un pendrive no le hizo ni caso</p>
        <p>
          {" "}
          Justamente la peli de ralph rompe internet estaba en ese pincho, y el
          hechizo de amor se ha hecho un lío! En lugar de enamorar al pobre Ivan
          le ha… transformado en un pipottino???
        </p>
        <h3 onClick={() => setNext(true)}>Si no es obsesivo no es amor</h3>
      </div>
      {next && <Home text={text} title={title} firstLevel={true}></Home>}
    </div>
  );
}
