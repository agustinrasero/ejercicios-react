import React from 'react'
import Agregar from './components/Agregar'
import Lista from './components/Lista'
import Editar from './components/Editar'
/*
    Ejercicio 46: Gestión de Usuarios con Estado Global
    Crea una aplicación que gestione una lista de usuarios usando useReducer y useContext para manejar el estado global.

    Requisitos:

    -Usa useReducer para manejar las acciones de agregar, eliminar y actualizar usuarios.
    -Usa useContext para proporcionar el estado y las funciones de despacho a los componentes hijos.
    -Un componente para agregar nuevos usuarios.
    -Un componente para mostrar la lista de usuarios.
    -Un componente para actualizar la información de un usuario.
*/
const Exercise25 = () => {
  return (
    <div>
      <Agregar/>
      <Lista/>
      <Editar/>
    </div>
  )
}

export default Exercise25
