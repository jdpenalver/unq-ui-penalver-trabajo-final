import React, { useContext } from 'react'
import { useState } from 'react'
import "../css/carta.css"
import { P1Context } from './Provider/GameContext'

const Carta = ({idDeFoto, urlFoto, handler, leHicieron}) => {

    // let seleccionado = false
    // const {usuario1} = useContext(P1Context)

    const [selecionado, setSelecionado] = useState(false)

     
  const cambiarSelecionado = () => {
    setSelecionado(!selecionado)
  }
 
  

  const meHicieronClick = (e) => {
    leHicieron(e, selecionado, cambiarSelecionado)
  } 
    
    return (
        <div onClick= { selecionado ? null : meHicieronClick  }  key={idDeFoto} className= { " carta " + (selecionado? "selecionado": "") }>
            <img id={idDeFoto} src={urlFoto} alt="" />
        </div>
    )
}

export default Carta
