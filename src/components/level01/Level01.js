import React, { useState, useEffect } from "react";
import Board from "./Board";
import Home from "../levelHome/LevelHome.js";
import { updateURLParameter } from "./helpers";
import cupid from "./assets/cupid.jpg";

export default function Level01() {
  const [imgUrl, setImgUrl] = useState(cupid);

  useEffect(() => {
    setImgUrl(cupid);
    document.title = `Cupido!`;
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

  const title = "El Mensajero";
  const text =
    "¡Has encontrado un enigma! No estamos en The Witness pero algo tendrás que hacer aquí para poder resolver este nivel. ¿Quien es el mensajero que está pintado en esta imagen? ";
  return (
    <div className="App1">
      <Home text={text} title={title}></Home>
      <Board imgUrl={imgUrl} />
    </div>
  );
}
