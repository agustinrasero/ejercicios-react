import React,{useReducer} from 'react'
import Contexto from './Contexto'
import { Reducer } from './Reducer'


const Provider = ({children}) => {

    const initialState = { usuarios: [] };

    const [usuarios, dispatch] = useReducer(Reducer, initialState)  

  return (
    <Contexto.Provider value={{usuarios: usuarios.usuarios,dispatch}}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider
