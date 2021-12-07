import React from 'react'
import { Link } from 'react-router-dom'
import "../css/playerName.css"
import { useContext } from 'react'
import { P1Context } from './Provider/GameContext'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'

const PlayerName = () => {

    const [userError, setError] = useState('')
    const {usuario1} = useContext(P1Context)

    const navigate = useNavigate()
    const handlerSummit = (e)=>  {
        e.preventDefault()
        if(e.target.name.value == '') {
            console.log("error")
            setError('Falta Espesificar el nombre de usuario')
        }else {
        usuario1.setName(e.target.name.value)
        navigate("/game/theme")
        }
    }
    // onChange={onChangeHandler}
    return (
    <div className="cont">
        <div className="center" >
        <form onSubmit={handlerSummit} action="">
           <label htmlFor=""> Nombre del jugador
            </label>
            <div className="input-group">
                <input  name="name" className="label" type="text" />
               <button>siguiente </button>
               { userError?<h1>{userError} </h1>:''}
            </div>
            </form>
        </div>
            
        
     </div>
    )
}

export default PlayerName
