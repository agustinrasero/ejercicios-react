import React,{useReducer,useState} from 'react'
import Contexto from './Contexto'
import { Reducer } from './Reducer'

//Gris claro #E0E0E0
//Gris oscuro #252424 

const Provider = ({children}) => {

    const [boton,setBoton] = useState(false)

    const [tema, dispatch] = useReducer(Reducer, {color: '#E0E0E0'})

  return (
    <Contexto.Provider value={{tema,dispatch,boton,setBoton}}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider



