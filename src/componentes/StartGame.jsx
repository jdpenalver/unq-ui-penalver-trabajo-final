import React, { useEffect, useState } from 'react'
import "../css/game.css"
import Carta from './Carta'
import { useParams } from 'react-router'
import { Api } from '../Api/Api'
import { funcionesArray } from '../funciones/arrayFn'

const StartGame = ( {tamano}) => {

const [fotos, setfotos]= useState([])
const {size} = useParams()
const [fotosDuplicadas, setfotosduplicadas]= useState([])

const [selecionado, setselect]= useState('')

useEffect(() => {
    let load = true
    if (load) {
        Api.searchQTPhoto('nature', photoToTake)
            .then( fotos=> {
                 setfotos(fotos)
                let tmp = funcionesArray.duplicarValores(fotos)
                setfotosduplicadas(funcionesArray.mezclar(tmp))
                      
        })
        load=false
    }
    
}, [])
let cliqueados = []

 const selectClick = (e, quitarClick, estado) => {
    // cliqueados.push(quitarClick)
    // console.log(estado)

    // if (selecionado == '') {
    //     setselect(e.target.id)
    //     quitarClick()
    // } else {
    //     if(selecionado === e.target.id){
    //         console.log("Gano")
    //     }else {
    //         console.log("Perdio")
    //         cliqueados.forEach((hablitarClick) =>{ 
    //             hablitarClick()
    //         console.log(cliqueados)
    //         })
    //     }
    //     setselect('')
    // }
}

let fnSelecionar
let elementoSelecionado

const leHicieronClick = (e, selecionado, handlerEventClick) => {
    if (!selecionado) {
        handlerEventClick() //saca evento de click
        if (!elementoSelecionado) {
            elementoSelecionado= e.target.id
            fnSelecionar = handlerEventClick // guardo event
        } else {
            if (elementoSelecionado == e.target.id) {
                console.log("Gano")
            }else{
                console.log("Perdio")
                fnSelecionar()
                handlerEventClick()
            }
        }
    } else {console.log("Ya estas Selecionado")}


}


let photoToTake;
switch (size) {
    case '2x2':
         photoToTake = 2;
         break;
    case '4x4': 
        photoToTake = 8
        break;
    case '8x8': 
        photoToTake = 16
        break;
    default: return <h1>No Size Found </h1>
}

const estiloDeGrilla= "tamano-" + size

    return (
        <div className="cuadricula">
            <div className={estiloDeGrilla}> 
            {
            fotosDuplicadas.map ((unaFoto) => 
            <Carta leHicieron= {leHicieronClick} handler={selectClick} idDeFoto={unaFoto.id} urlFoto ={unaFoto.src.small} /> )
            }
            </div>
        </div>
    )
}
export default StartGame