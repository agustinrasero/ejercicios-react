import React,{useState} from 'react'
import Boton from './components/Boton'


/*
    Ejercicio 1: Contador con Hooks
    Crea un componente de contador que tenga las siguientes características:

    -Un botón para incrementar el valor del contador.
    -Un botón para decrementar el valor del contador.
    -El valor del contador no puede ser negativo.
    -Usa useState para manejar el estado del contador.
 */


const Exercise1 = () => {

    const [contador,SetContador] = useState(0) //Contador

    const sumar = () =>{
        SetContador(contador + 1)
        
    }

    const restar = () =>{
        if (contador > 0) {
            SetContador(contador - 1)
        }
        
    }

  return (
    <>
    <div className='contador'>
    <Boton onClick={sumar} name='+'></Boton>
    <Boton onClick={restar} name='-'></Boton>
    <div>Contador: {contador}</div>
    </div>
    </>
  )
}

export default Exercise1
