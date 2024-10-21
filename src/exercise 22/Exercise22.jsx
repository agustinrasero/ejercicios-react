import React,{useState} from 'react'
/*
    Ejercicio 36: Lista de Contactos con Detalles
    Crea una lista de contactos que permita ver los detalles de cada contacto al hacer clic.

    Requisitos:

    -Un estado para almacenar la lista de contactos.
    -Un estado para almacenar el contacto seleccionado.
    -Muestra los detalles del contacto seleccionado. 
*/


const Exercise22 = () => {
    const [contactos, setContactos] = useState([{ id: 1, nombre: 'Ana López', telefono: '123-456-7890'},{ id: 2, nombre: 'Facundo Mendez', telefono: '145-254-2148'}]);
    const [contactoSeleccionado, setContactoSeleccionado] = useState([null]);

  return (
    <>
      <h1>Lista de contactos</h1>
    
    <div className='contenedor'>
      <div className='lista'>
        <div className='contactos'>
          {contactos.map((value,index) => <div key={index}>
            <p>{value.nombre}</p>
            <button onClick={()=>setContactoSeleccionado(value)}>Ver Detalles</button>
          </div>)}
        </div>
      </div>


      {(contactoSeleccionado) && <div className='pop'>
        {(contactoSeleccionado !== null) &&
          <div key={contactoSeleccionado.id}> 
            <p>{contactoSeleccionado.nombre}</p>
            <p>{contactoSeleccionado.telefono}</p>
            <button onClick={()=>setContactoSeleccionado(null)}>Cerrar</button>
          </div>}
          
      </div>}
    </div>
    </>
  )
}

export default Exercise22
