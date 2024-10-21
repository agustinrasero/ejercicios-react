import React,{useContext} from 'react';
import Contexto from '../Context/Contexto';



const Lista = () => {

    const {usuarios,dispatch} = useContext(Contexto)

    const eliminar = (index) => {
        dispatch({type: 'eliminar', payload: index})
    }


    return (
        <>
        <h2>Listar</h2>
        <div>
            {(usuarios.length >= 1) ? usuarios.map((usuario,index) => (
                <div  className='lista' key={index}>
                    <p>{usuario.nombre}</p>
                    <p>{usuario.apellido}</p>
                    <p>{usuario.edad}</p>
                    <button onClick={() => eliminar(index)}>Eliminar</button>
                </div>
            )): <p>No hay usuarios</p>}
        </div>
        </>
    );
};

export default Lista;