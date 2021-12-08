import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Informacion = () => {

const location = useLocation()

    return (
        <div>
            <h1> {location.state?location.state.msg:'' } </h1>
            <Link to= "/"> volvamos al principio</Link>
        </div>
    )
}

export default Informacion
