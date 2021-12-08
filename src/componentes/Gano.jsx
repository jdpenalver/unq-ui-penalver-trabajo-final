import React from 'react'
import '../css/gano.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { P1Context } from './Provider/GameContext'
const Gano = () => {

    const navigate = useNavigate()

    const resetUser = () => {
        usuario1.setName('')
        usuario1.setScore(0)
        navigate("/")

    }

    const {usuario1} = useContext(P1Context);
    return (
        <div className="gano">
            <div>
                <h1> Henorabuena {usuario1.Name} has  ganado con un puntaje de {usuario1.Score}!  </h1>

                <h3>¿Crees que podras seguir mejorando tu puntaje?</h3>
                <h3>Selecciona otro Nivel si es que te eres capaz</h3>
            </div>
            
            <Link className="gano-link" to={"/game/theme"}> Seleccion de nivel</Link>
            <button onClick={resetUser} className="gano-finalizar "> finalizar</button>
            
          
        </div>
    )
}

export default Gano
