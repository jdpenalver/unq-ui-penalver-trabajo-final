import React, { useContext } from 'react'
import { useState } from 'react'
import "../css/carta.css"
import { P1Context } from './Provider/GameContext'
import CartaVacia from './CartaVacia'
import CartaLlena from './CartaLlena'

const Carta = ({idDeFoto, urlFoto, padre, leHicieron}) => {

    const [selecionado, setSelecionado] = useState(false)

  const cambiarSelecionado = () => {
    setSelecionado(!selecionado)
  }
 
  
  const handlerSelecion = () => {
    // setSelecionado(!selecionado)
   padre(setSelecionado, selecionado,idDeFoto)
  }

  if (selecionado) {
    return (
    <div className="carta" onClick={handlerSelecion} id={idDeFoto}  key={idDeFoto}>
      <CartaLlena idDeFoto={idDeFoto} urlFoto={urlFoto}></CartaLlena>
    </div>
    )
  } else {
    return (
    <div className="carta" onClick={handlerSelecion} >
      <CartaVacia></CartaVacia>
    </div>    )
  }
}

export default Carta
