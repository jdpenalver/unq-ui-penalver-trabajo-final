import React from 'react'
import { Link } from 'react-router-dom'
const NotLogged = () => {
    console.log("No logeado")
    return (
        <div className="main">
            usuario no completo, comencemos a jugar desde
            <Link to="/"> Aqui! </Link>
        </div>
    )
}

export default NotLogged
