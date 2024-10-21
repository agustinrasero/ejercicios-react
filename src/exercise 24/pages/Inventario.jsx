import React from 'react'
import Switch from '../components/Switch'
import { useContext } from 'react';
import Contexto from '../Context/Contexto';



const Inventario = () => {

    const {tema,dispatch} = useContext(Contexto);

  return (
    <div style={{backgroundColor: tema.color}}>
      <hr></hr>
      <Switch/>
      <h1>Inventario</h1>
      <p>Este es la pagina de inventario</p>
    </div>
  )
}

export default Inventario
