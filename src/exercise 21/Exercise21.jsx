import React,{useState,useRef} from 'react'

/*
    Ejercicio 32: Lista de Favoritos
    Crea una aplicación que permita agregar y eliminar elementos de una lista de favoritos.

    Requisitos:

    -Un estado para almacenar los elementos favoritos.
    -Un input para agregar nuevos elementos.
    -Un botón para agregar el elemento a la lista de favoritos.
    -Un botón para eliminar elementos de la lista de favoritos.
*/

const Exercise21 = () => {

    const elemento = useRef();
    
    const [elementos, setElementos] = useState([]);

    const [favoritos, setFavoritos] = useState([]);


    const agregar  =(value)=>{
        if (favoritos.includes(value)){
            return;
            
        }
        else{
            setFavoritos([...favoritos,value]);
        }
        
    }

    const eliminar = (value)=>{
        setFavoritos(favoritos.filter(item => item !== value));
    }

    const agregarElemento = ()=>{
        setElementos([...elementos,elemento.current.value]);
        elemento.current.value = '';
    }

  return (
    <div className='overlay'>
      <div className='lista'>
        <h1>Lista</h1>
        <label>Agregar un elemento</label>
        <input type='text' ref={elemento}></input>
        <button onClick={agregarElemento}>Agregar</button>
        <div className='elementos'>
            {(elementos !== null) ? 
                elementos.map((value,index)=> <div key={index}>
                <p>{value}</p>
                <button onClick={()=>agregar(value)}>Agregar a Favoritos</button>
            </div>)
            : <div>No hay elementos</div>}
        </div>
      </div>
      
      <div className='lista-fav'>
        <h1>Favoritos</h1>
        {favoritos.map((value,index)=>
        <div key={index}>
            <p>{value}</p>
            <button onClick={()=>eliminar(value)}>Eliminar</button>
        </div>)}
      </div>

    </div>
  )
}

export default Exercise21
