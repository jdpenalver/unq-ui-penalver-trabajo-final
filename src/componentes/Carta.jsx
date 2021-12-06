import React, { useContext } from 'react'
import "../css/carta.css"
import { P1Context } from './Provider/GameContext'

const Carta = ({idDeFoto, urlFoto}) => {

    let seleccionado = false
    const {usuario1} = useContext(P1Context)
    
    
    const guardarSelected = (e) => {
        let seleccion= e.target.id

        if(seleccionado) {
            if (usuario1.selected === seleccion)
            {
            console.log('ganooo')
            usuario1.setSelected('') 
            } else {
            seleccionado= false
            console.log('Sin coicidencia')
            usuario1.setSelected('') 
            }
        }else{
            usuario1.setSelected(seleccion) 
            seleccionado = true
            console.log(seleccion)
            console.log('================')
            console.log(usuario1.selected)
        }

    }

    return (
        <div onClick= {guardarSelected}  key={idDeFoto} className="carta">
            <img id={idDeFoto} src={urlFoto} alt="" />
        </div>
    )
}

export default Carta
