import React from 'react'
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'
import '../css/gameBar.css'
import { useNavigate } from 'react-router'


const Game = () => {

    const navigate = useNavigate()
    const {usuario1} = useContext(P1Context);
    const resetUser = () => {
        usuario1.setName('')
        usuario1.setScore(0)
        navigate("/")

    }
    
    return (
            <nav className="gameBar-cont">
                <h6 className="gameBar-text">Player 1: {usuario1.Name} </h6>
                <h6 className="gameBar-text">Puntaje: {usuario1.Score}</h6>
                <button onClick={resetUser} className="gameBar-btn"> Me Rindo</button>
                
                
            </nav>
    )
}

export default Game
