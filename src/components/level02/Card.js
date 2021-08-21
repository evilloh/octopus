import classNames from 'classnames'
import React, { useState } from "react";
import { Link } from 'react-router-dom'


const card = classNames({
    container: true,
})

export default function Card(props) {
    const [selectedCard, setSelectedCard] = useState("")
    const closePopup = () => {
        setSelectedCard("")
    }
    return (
        <React.Fragment>
            {selectedCard === props.card.name &&
                <div className="popupCard">
                    <div className="videoContainer">
                        <iframe
                            width="560"
                            height="315"
                            src={props.card.videoSrc}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        {props.card.right ? <Link to="/3"><button className={"cupidButtonEnd buttonGL"} onClick={() => closePopup("mamasita next")}>¡NEXT LEVEEEEL!</button></Link>
                            : <button className={"cupidButtonEnd buttonGL"} onClick={() => closePopup("mamasita next")}>Close</button>}
                    </div>
                </div>
            }
            <div className="containerCard" onClick={() => setSelectedCard(props.card.name)}>
                <div className="featured-img">
                    <img src={props.card.src} />
                </div>
            </div >
        </React.Fragment >
    )
}
