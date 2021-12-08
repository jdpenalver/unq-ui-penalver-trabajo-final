import React from 'react'
import "../css/playerName.css"
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const PlayerName = () => {

    const [userError, setError] = useState('')
    const {usuario1} = useContext(P1Context)

    const navigate = useNavigate()
    const handlerSummit = (e)=>  {
        e.preventDefault()
        if(e.target.name.value == '') {
            console.log("error")
            setError('Por favor ingresa tu nombre')
        }else {
        usuario1.setName(e.target.name.value)
        navigate("/game/theme")
        }
    }
    return (
    <div className="player-name-cont">
        <form className="player-name-center" onSubmit={handlerSummit} action="">
            <input className="player-name-input" placeholder="Ingresa tu nombre" name="name" type="text"/>
            <button className="player-name-btn">siguiente </button>
            { userError?<h3>{userError} </h3>:''}
        </form>
    </div>
    )
}

export default PlayerName
