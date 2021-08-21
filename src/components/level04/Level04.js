import React, { useState, useEffect } from "react";
import "./level04.css";
import { Link } from "react-router-dom";
import photo0 from "./assets/photo0.jpg";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpg";
import photo6 from "./assets/photo6.jpg";
import ivanchi from "../../assets/ivangif2.gif";

import Home from "../levelHome/LevelHome";

export default function Level03(props) {
  const [lives, setLives] = useState(3);
  const [isShown, setIsShown] = useState(false);
  const [description, setDescription] = useState("0");
  const [selectedPhoto, setSelectedPhoto] = useState("0");
  const [src, setSrc] = useState(photo0);
  const [rightPhoto, setRightPhoto] = useState(false);

  const handleSelectPhoto = (photy) => {
    setSelectedPhoto(photy.alt);
    setSrc(calculateSrc(photy.alt));
  };

  const choosePhoto = () => {
    if (selectedPhoto != "4") {
      return setLives(lives - 1);
    }
    setRightPhoto(true);
  };

  const calculateSrc = (selectedPhoto) => {
    switch (selectedPhoto) {
      case "0":
        return photo0;
      case "1":
        return photo1;
      case "2":
        return photo2;
      case "3":
        return photo3;
      case "4":
        return photo4;
      case "5":
        return photo5;
      case "6":
        return photo6;
      default:
        return photo0;
    }
  };

  const calculateDescription = () => {
    console.log("sle", selectedPhoto);
    switch (selectedPhoto) {
      case "0":
        return "Una mansión de la locura. Esta foto me recuerda el momento que empecé a sentirme en familia. Me gusta que esté Carlos en la foto porque me acuerdo que no me sentía que mi presencia molestaba en casa, aunque no estuviese jugando. Me sentía en family, jugando a un juego que me flipaba porque era un poco como jugar de rol y jugar contigo era lo más mejor! Encima está tambien Felipe, lo cual significa que mi pasado, mi presente y probablemente mi futuro están todos juntis en la foto!";
      case "1":
        return "El primer selfie! Tipico mío que me sentía culpable en que tuvieses que acompañarme al coñazo del seguro del corte inglés. Vaya forma de cargarte lo que podría haber sido con el chico, que os encanta follar pero llevartelo por 'seguros' no es lo mejor. Espero que no se cabree. Pero bueno, tampoco lo pasó tan mal, en cualquier caso... le robo un selfie, por si se va tengo este selfie para recordarme de el.";
      case "2":
        return "Eurovision??? O sea que nocheee! Una family con amigos de family en entorno de family! Fue espectacular, ya que no fuimos nunca a eventos o conciertos me gustaba mucho la idea de ver algo de entretenimiento juntis! Prepararlo y mirar los concursantes y luego vestirnos bien y preparar aperoles y verlo juntis los tres! Tan contento estuve al ver que te gustaba el evento que todavía se me ponen los pelos de punta.";
      case "3":
        return "La primera comida en 'V'! O sea vamos a comer fuera todos? Que es esto? Que no soy solo uno más si no que soy parte de... esto? En el mercado allí me sentí muy agusto no solo por la comida o por el sugar daddy que me pagó da mangiare si no que me sentí parte de vosotros y me gustó mucho.";
      case "4":
        return "¡Lidl! Aquí me contaste del miedo que tenías de que todo se acabara, de que podía hacerte daño, de lo vulnerable que estabas y de como sentías muuucho amor. Me acuerdo sentirme un poco incomodo porque no quiero hacerte daño, pero tengo que cuidarme a mi mismo primero. Me sentí muy muy amado, y con un poco de miedo. Y la foto tía, parecemos novios de verdad, y con helado gratis encima!";
      case "5":
        return "La family! Desde el principio me has hecho entrar en la family a través de los juegos, y realmente os quiero de corazón, a ti a Rulo y Oscar. Me habeís llenado el corazón de felicidad y de reglas de juegos. Me acuerdo que estaba super contento por este juego porqué era una ocasión por disfrutar, de divertirse juntos. Encima me acuerdo que me hacía ilusión ponerme de pirata para jugar y, si en una parte tenía Felipe que me decía que era ridiculo, por otra parte estabas tu contento de verme así. Sí, vale, quizás tu también sentías vergüenzita ajena, pero me apoyaste y te reíste un montón y eso realmente me dió la vida. Que no tengo que esconderme o limitarme, a por ello 100%, y eso es gracias a ti!";
      case "6":
        return "Una cosa que le decía a mi psicologa era 'es que me da ansiedad volver a trabajar' cuando acababan dias de vacaciones o de finde. Y me preguntaba el porque. Yo decía 'es que no puedo hacer lo que hago en vacaciones'... o sea, perdon? Claro que puedo! Y así fue, un dia dije 'quiero tomar un dia de vacaciones en Madrid' así super random. Y tu estabas allí a acompañarme en esa locura cuotidiana. Que día, que borrachera, que vergüenza y que amor. Un día inolvidable con una persona inolvidable.";
      default:
        return "default default default";
    }
  };

  const handleShown = (bool) => {
    if (bool) {
      const decription = calculateDescription();
      setDescription(decription);
      setIsShown(true);
    } else if (!bool) {
      setIsShown(false);
    }
  };
  const resetLives = (bool) => {
    setLives(3);
  };

  const title = "Conoceros";
  const text =
    "Has pasado mucho tiempo con el chico ya, habeis compartido muchos momentos inovidables. Bueno, inolvidables no sé, ya que los dos os olvidais hasta vuestro nombre. Suerte que existen las fotografias... Podrás adivinar cual es la fotografia que Alessio prefiere de vosotros?";

  return (
    <div className="photosContainer">
      <Home text={text} title={title}></Home>
      {lives <= 0 ? (
        <div className="popupCard popupCardError">
          <div>
            <h1 className="popupCardTitle">A ver tía no me decepciones...</h1>
            <h1 className="popupCardTitle">
              Puñetazo para despertarte y volvemos a intentarlo.
            </h1>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c7r9zULsmzc?&autoplay=1"
            autoplay
          ></iframe>
          <button
            className={"cupidButtonEnd buttonGL"}
            onClick={() => resetLives()}
          >
            ¡Otra vez!
          </button>
        </div>
      ) : null}

      <div className="previewsContainer">
        <img
          alt="0"
          className="previewPhoto"
          onClick={(e) => handleSelectPhoto(e.target)}
          src={photo0}
        ></img>
        <img
          alt="1"
          className="previewPhoto"
          onClick={(e) => handleSelectPhoto(e.target)}
          src={photo1}
        ></img>
        <img
          alt="2"
          className="previewPhoto"
          onClick={(e) => handleSelectPhoto(e.target)}
          src={photo2}
        ></img>
        <img
          alt="3"
          className="previewPhoto"
          onClick={(e) => handleSelectPhoto(e.target)}
          src={photo3}
        ></img>
        <img
          alt="4"
          className="previewPhoto"
          onClick={(e) => handleSelectPhoto(e.target)}
          src={photo4}
        ></img>
        <img
          alt="5"
          className="previewPhoto"
          onClick={(e) => handleSelectPhoto(e.target)}
          src={photo5}
        ></img>
        <img
          alt="6"
          className="previewPhoto"
          onClick={(e) => handleSelectPhoto(e.target)}
          src={photo6}
        ></img>
      </div>
      <div className="wideImageContainer">
        {rightPhoto && (
          <div className="photoDescriptionRight">
            <p>
              Fue solo después de tiempo que pude apreciar lo que pasó ese dia.
              Solo cuando me abrí a ti, llorando en mi cama despues de haber
              peleado con una menguera en mi culo, pude empezar a acceptar
              realmente mis sentimientos por ti. Abrirme y poder aprovechar de
              todo el amor que me puedes dar, a precio de darte el poder de
              herirme. Y cada día pienso que aquel día en el Lidl sí que me
              sentía culpable porque tu me querías mucho más que yo a ti, porque
              tenía que protegerme. Pero ahora no estoy tan seguro de eso, ya
              que me siento reflejado cada día mas en las palabras que me
              dijiste aquel día. Y tía, la foto es de super novioooos! Lo vuelvo
              a repetir pero me encantinggg!
            </p>
          </div>
        )}
        {isShown && (
          <div
            onMouseLeave={() => handleShown(false)}
            className="photoDescription"
          >
            <p>{description}</p>
          </div>
        )}
        <img onMouseEnter={() => handleShown(true)} src={src}></img>
      </div>
      <div className="selectionContainer">
        <div>
          <img className={"ivanchiGif2"} src={ivanchi}></img>
        </div>
        {rightPhoto ? (
          <Link to="/5">
            <button
              className={"cupidButtonEnd buttonGL"}
              onClick={() => choosePhoto()}
            >
              ¡Lo estás petando!
            </button>
          </Link>
        ) : (
          <button
            className={"cupidButtonEnd buttonGL"}
            onClick={() => choosePhoto()}
          >
            ¡ES ESTA!
          </button>
        )}
        <div className="intentosContainer">
          <h1>Tienes</h1> <h1> {lives} </h1> <h1>intentos</h1>
        </div>
      </div>
    </div>
  );
}
