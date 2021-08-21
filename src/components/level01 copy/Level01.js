import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Level01Square from './components/Square.js'
import './level01.css';


export default function Level01() {
    const [selectedSquare, setSelectedSquare] = useState(1);

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {

        console.log("num,", selectedSquare)
        // Actualiza el título del documento usando la API del navegador
        document.title = `Cupido!`;
    });

    const moveSquare = (dir) => {
        console.log("dir", dir)
        return dir
    }

    const selectSquare = (num) => {
        setSelectedSquare(num)
    }

    const image = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className='levelContainer'>
            <div className={"cupidContainer"}>
                {image.map(squareNumber => {
                    return <Level01Square key={squareNumber} selectedSquare={selectedSquare} onClick={selectSquare} number={squareNumber}>
                    </Level01Square>
                })}
            </div>

            <div className={"cupidButtonsContainer"}>
                <div onClick={() => moveSquare("l")} className={"cupidButton"}>left</div>
                <div onClick={() => moveSquare("r")} className={"cupidButton"}>right</div>
                <div onClick={() => moveSquare("u")} className={"cupidButton"}>up</div>
                <div onClick={() => moveSquare("d")} className={"cupidButton"}>down</div>
                <div onClick={() => moveSquare()} className={"cupidButton"}>OK</div>
            </div>
        </div>
    );
}