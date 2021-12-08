import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import '../css/info.css'
const Informacion = () => {

const location = useLocation()

    return (
        <div className="info">
            <section className="info-section">
                <p>Lametamos Verte aca, pero no podemos detectar tu nombre
            .Pero no todo esta perdido!
            Vamos a Empezar a Jugar</p>
            <h1> {location.state?location.state.msg:'' } </h1>
            </section>
            
            <Link className="info-link" to= "/"> Empezemos a jugar</Link>
        </div>
    )
}

export default Informacion
