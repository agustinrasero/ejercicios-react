import React,{useState,useRef} from 'react'

/*
    Ejercicio 2: Lista de Tareas (ToDo List)
    Crea una aplicación de lista de tareas donde puedas:

    -Añadir nuevas tareas a la lista.
    -Marcar tareas como completadas.
    -Eliminar tareas.
    -Usa useState para manejar la lista de tareas. 
*/

const Exercise2 = () => {
    const valor = useRef(null);
    const valor2 = useRef(null);
    const[tarea,SetTarea] = useState([]);

    const agregar = () =>{
        SetTarea([...tarea,valor.current.value])
        valor.current.value = "";
    }

    const eliminar = (index) => {
        const nuevasTareas = tarea.filter((_, i) => i !== index); // El subrayado _ es solo una convención en JavaScript para indicar que no nos importa el primer argumento
        SetTarea(nuevasTareas);
    };

    
  return (
    <div>
      <input type='text' ref={valor}></input>
      <button onClick={agregar}>Agregar</button>
      {tarea.map((tar,index) =>(
        <div className='tareas' key={index}>
            <button onClick={()=>eliminar(index)}>X</button> {/*Pasamos el index a la funcion, '()=>' Es necesario para q no se ejecute todo el tiempo */}
            <h4 ref={valor2}>{tar}</h4>
            <input type='radio'></input>
        </div>
      ))}
    </div>
  )
}

export default Exercise2
