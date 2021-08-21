import React, { useState, useEffect } from 'react';
import classNames from 'classnames';


export default function Level01Square(props) {

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        document.title = `Cupido!`;
    });

    var squareClass = classNames({
        square: true
    })
    var selectedSquareClass = classNames({
        square: true,
        selected: true,
    })

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onClick(props.number);
    }

    return (
        <div onClick={() => handleChange(props.number)} className={props.selectedSquare === props.number ? selectedSquareClass : squareClass}>
            {props.number}
        </div>
    );
}