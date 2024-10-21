import React,{useEffect, useState} from 'react'

/*
    Ejercicio 28: Lista de Contactos con Búsqueda
    Crea una lista de contactos con un campo de búsqueda para filtrar los contactos.

    Requisitos:

    -Un estado para almacenar la lista de contactos.
    -Un estado para almacenar el término de búsqueda.
    -Filtra la lista de contactos según el término de búsqueda.
*/

const Exercise19 = () => {

    const contactos = [
        { id: 1, nombre: 'Ana López', telefono: '123-456-7890' },
        { id: 2, nombre: 'Carlos Pérez', telefono: '234-567-8901' },
        { id: 3, nombre: 'María García', telefono: '345-678-9012' },
        { id: 4, nombre: 'Juan Martínez', telefono: '456-789-0123' },
        { id: 5, nombre: 'Lucía Fernández', telefono: '567-890-1234' },
        { id: 6, nombre: 'Jorge Ramírez', telefono: '678-901-2345' },
        { id: 7, nombre: 'Sofía Torres', telefono: '789-012-3456' },
        { id: 8, nombre: 'Pedro Gómez', telefono: '890-123-4567' },
        { id: 9, nombre: 'Elena Rodríguez', telefono: '901-234-5678' },
        { id: 10, nombre: 'Andrés Ruiz', telefono: '012-345-6789' }
    ];

    const [busqueda, setBusqueda] = useState('');
    const [lista, setLista] = useState(contactos);

    useEffect(()=>{
        setLista(contactos.filter(value => value.nombre.toLowerCase().includes(busqueda.toLowerCase())))
    },[busqueda])


  return (
    <div>
        <label>Buscar</label>
        <input type='text' onChange={(e)=> setBusqueda(e.target.value)}></input>
        <h4>Contactos</h4>
        {lista.map(value => 
        <div className='contacts' key={value.id}>
            <p>{value.nombre}</p>
            <p>{value.telefono}</p>
        </div>)}
        
    </div>
  )
}

export default Exercise19
