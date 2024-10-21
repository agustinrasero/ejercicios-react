import React,{useState} from 'react'
import { imagenes } from './data/data'

/*
    Ejercicio 7: Carrusel de Imágenes
    Crea un carrusel de imágenes con las siguientes características:

    -Muestra una imagen a la vez.
    -Añade botones para navegar hacia adelante y hacia atrás en el carrusel.
    -Usa useState para manejar el índice de la imagen actual.
 */


const Exercise6 = () => {
    const [imagen,setImagen] = useState(0)


    const siguiente = () =>{
        if (imagen < 4) {
            setImagen(imagen + 1)
        }
       
    }

    const anterior = () =>{
        if (imagen > 0) {
            setImagen(imagen - 1)
        }
        
    }

    const find = imagenes.find((_,index)=> index === imagen)
   


  return (
    <div className='contenedor'>
      <div className='contenedor-img'>
        <img src={find}></img>
        <div className='botones'>
            <button onClick={anterior}>Anterior</button>
            <button onClick={siguiente}>Siguiente</button>
        </div>
       
      </div>
    </div>
  )
}

export default Exercise6
