import React, { useState, useEffect } from "react";
import './level0.css'
import { Link } from 'react-router-dom'


export default function Level03(props) {
    const [selectManina, setSelectManina] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const [message, setMessage] = useState("")
    const clickManina = () => {
        setSelectManina(true)
    }

    useEffect(() => {
        const loweredMessage = message.toLowerCase()
        if (loweredMessage == "guapa" || loweredMessage == "carita guapa") {
            setCorrectAnswer(true)
        }
    }, [message]);

    return (
        <div className="maninaContainer">
            {selectManina &&
                <div className="popupCard">
                    <div className="videoContainer">
                        {correctAnswer ? <img className="caritaGuapa" src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2016/11/la-ni%C3%B1a-de-sus-ojos-velazquez-xlsemanal-768x506.jpg"></img>
                            : <img className="caritaGuapa" src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2016/11/la-ni%C3%B1a-de-sus-ojos-velazquez-xlsemanal-768x506.jpg"></img>}
                        {!correctAnswer && <input onChange={(s) => setMessage(s.target.value)} type="text"></input>}
                        {correctAnswer && <Link to="/4"><button className={"cupidButtonEnd buttonGL"}>¡NEXT LEVEEEEL!</button></Link>}
                    </div>
                </div>
            }
            <img onClick={() => clickManina()} className="manina" src="https://i.pinimg.com/originals/0a/4a/ac/0a4aac4618d665ec775a8f48451ecefe.png"></img>
        </div>
    )
}
