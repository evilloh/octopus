import React, { useState } from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
import "./level01.css";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { canSwap, shuffle, swap, isSolved } from "./helpers";
import classNames from "classnames";

export default function Board({ imgUrl }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const [resets, setResets] = useState(0);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    setResets(resets + 1);
    shuffleTiles();
    console.log(resets);
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  var hasWon = isSolved(tiles);
  if (resets >= 15) {
    hasWon = true;
  }
  var board = classNames({
    boardHidden: !isStarted,
    board: true,
  });

  return (
    <React.Fragment>
      <ul style={style} className={board}>
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && (
        <div>
          <h2>
            ¡Es Cupido! Pudiste "librar" Cupido de su jaula magica ¡Ahora puede
            lanzar su flecha para que el primer amor pueda empezar!
          </h2>
          <h4>Espera... te está persiguiendo... ¡¡¡huye!!!</h4>
        </div>
      )}
      {!isStarted ? (
        <button
          className={"cupidButtonStart buttonGL"}
          onClick={() => handleStartClick()}
        >
          Start game
        </button>
      ) : hasWon ? (
        <Link to="/2">
          <button
            className={"cupidButtonEnd buttonGL"}
            onClick={() => console.log("mamasita next")}
          >
            Next level!
          </button>
        </Link>
      ) : (
        <button className="buttonGL" onClick={() => handleShuffleClick()}>
          Restart game
        </button>
      )}
    </React.Fragment>
  );
}
