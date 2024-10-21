import React,{useState,useContext} from 'react'
import Contexto from '../Context/Contexto'

const Agregar = () => {

    const {dispatch,usuarios} = useContext(Contexto)


    const agregar = (e) => {
        e.preventDefault()
        const nombre = e.target.nombre.value
        const apellido = e.target.apellido.value
        const edad = e.target.edad.value
        
        dispatch({type:'agregar',payload:{nombre,apellido,edad}})
        
        e.target.reset();

       
    }

    console.log(usuarios)

  return (
    <div>
        <h2>Agregar Usuario</h2>
        <form onSubmit={agregar}>
            <div className='formulario'>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
            </div>
            <div className='formulario'>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" />
            </div>
            <div className='formulario'>
                <label htmlFor="edad">Edad:</label>
                <input type="number" id="edad" name="edad" />
            </div>
            <button type="submit" >Agregar</button>
        </form>
    </div>
  )
}

export default Agregar
