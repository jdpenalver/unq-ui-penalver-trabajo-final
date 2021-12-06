import React from 'react'
import { Link } from 'react-router-dom'
import "../css/playerName.css"
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'

const PlayerName = () => {

    const {usuario1} = useContext(P1Context)

    const onChangeHandler = (e)=>  {
        usuario1.setName(e.target.value)
    }

    return (
    <div className="cont">
        <div className="center" >
           <label htmlFor=""> Nombre del jugador
            </label>
            <div className="input-group">
                <input onChange={onChangeHandler} className="label" type="text" />
               <Link to="/game/size">Siguiente</Link>
            </div>
        </div>
            
        
     </div>
    )
}

export default PlayerName
