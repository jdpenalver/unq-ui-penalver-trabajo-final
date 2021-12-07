import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react/cjs/react.development'
import { P1Context } from './Provider/GameContext'




const Tema = () => {
    const navigate = useNavigate() 
    const {usuario1} = useContext(P1Context)
  const [empyError, setEmpyError] = useState('')
    
    
    const handlerChange = (e) => {
        e.preventDefault()
        if (e.target.tema.value) {
            usuario1.setTema(e.target.tema.value)
            console.log(e.target.tema.value)
            navigate("/game/size")
        }else {
            setEmpyError("Falta espesificar un tema")
            console.log("eeorr")

        }
    }
    
    return (
        <div className= "main">
                <form  onSubmit={handlerChange} action="">
                <input name="tema" type="text" />        
                <button> Siguiente</button>
                {empyError? empyError:'' }
                </form>
        </div>
    )
}

export default Tema
