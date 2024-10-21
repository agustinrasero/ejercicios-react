import React,{useContext,useState,useRef} from 'react'
import Contexto from '../Context/Contexto'

const Editar = () => {

  const {usuarios,dispatch} = useContext(Contexto)


  const nombre = useRef(null);
  const apellido = useRef(null);
  const edad = useRef(null);
  const id = useRef(null);

  const [boton,setBoton] = useState(false);

  

  const editarUsuario = (e) => {

    

    const usuario = usuarios[e];
    
    if(boton){
      nombre.current.value = usuario.nombre;
      apellido.current.value = usuario.apellido;
      edad.current.value = usuario.edad;
      id.current = e;
    }
    
    
    setBoton(true);
    
   
  }
 

  const editar = (e) => {
    
    e.preventDefault(); // Prevenir el comportamiento por defecto del form

    const nombre = e.target.nombreE.value
    const apellido = e.target.apellidoE.value
    const edad = e.target.edadE.value

    dispatch({type:'editar',payload:{nombre,apellido,edad,id:id.current}})
    e.target.reset();

    setBoton(false);

    console.log(usuarios)
  }

  

  return (
    <>
    <h2>Editar</h2>

    {(usuarios.length >= 1) ? usuarios.map((usuario,index) => (
        <div className='lista' key={index}>
            <p>{usuario.nombre}</p>
            <p>{usuario.apellido}</p>
            <p>{usuario.edad}</p>
            <button onClick={()=> editarUsuario(index)}>Editar</button>
        </div>
    )): <p>No hay usuarios</p>}
    

    <div>
        {(boton) && <form onSubmit={editar}>
            <div className='formulario'>
                <label htmlFor="nombreE">Nombre:</label>
                <input type="text" id="nombreE" name="nombreE" ref={nombre}/>
            </div>
            <div className='formulario'>
                <label htmlFor="apellidoE">Apellido:</label>
                <input type="text" id="apellidoE" name="apellidoE" ref={apellido}/>
            </div>
            <div className='formulario'>
                <label htmlFor="edadE">Edad:</label>
                <input type="number" id="edadE" name="edadE" ref={edad}/>
            </div>
            <button type="submit" >Guardar</button>
        </form>}
    </div>
    </>
  )
}

export default Editar
