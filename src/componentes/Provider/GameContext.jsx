import React, { createContext } from 'react'

import { useState } from 'react';


export const GameContext = createContext();
export const P1Context = createContext();
export const P2Context = createContext();

export const P1Provider = ({children}) => {
  
    const [Name, setName] = useState('')
    const [Score, setScore] = useState(0)

 
  
     const usuario1 = {Name,setName,Score,setScore}      

      return (
          <P1Context.Provider value = {{usuario1}}>
              {children}
          </P1Context.Provider>
      )
  }
