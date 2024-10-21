import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inventario from './pages/Inventario'
import Home from './pages/Home'
import Naveg from './components/Naveg'



/*
    Ejercicio 44: Configuración de Tema con Estado Global
    Crea una aplicación que permita cambiar el tema (claro/oscuro) usando useReducer y useContext para manejar el estado global del tema.

    Requisitos:

    -Usa useReducer para manejar las acciones de cambiar el tema.
    -Usa useContext para proporcionar el estado y las funciones de despacho a los componentes hijos.
    -Un componente para cambiar el tema.
    -Un componente para mostrar el contenido con el tema seleccionado.
*/

const Exercise24 = () => {
  return (
    <>
    <BrowserRouter>

      <Naveg></Naveg>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inv" element={<Inventario/>} />
      </Routes>
     
    </BrowserRouter>

    </>
  )
}

export default Exercise24
