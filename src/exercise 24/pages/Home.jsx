import React from 'react'
import Switch from '../components/Switch'
import { useContext } from 'react';
import Contexto from '../Context/Contexto';

const Home = () => {

    const {tema,dispatch} = useContext(Contexto);

  return (
    <div style={{backgroundColor: tema.color}}>
     <hr></hr>
      <Switch/>
      <h1> Bienvenido a home</h1>
      <p>Esta es la página de inicio</p>
    </div>
  )
}

export default Home
