import React,{useEffect,useState} from 'react'
/*
    Ejercicio 3: API de Usuarios
    Crea una aplicación que consuma una API pública de usuarios (por ejemplo, Random User API):

    -Muestra una lista de usuarios con su nombre, foto y email.
    -Añade un botón para cargar más usuarios.
    -Usa useEffect para manejar la solicitud a la API y useState para almacenar la lista de usuarios.
*/
const Exercise3 = () => {
    const api = 'https://randomuser.me/api/'
    const [usuarios,setUsuarios] = useState([])
    useEffect(()=>{
        
    
        
        fetch(api)
        .then(response => response.json())
        .then(data => {
            setUsuarios([data.results[0]]); // Guardar directamente el primer usuario en el array
        })
            
       
        
    },[])

    const agregar = () =>{
    
        fetch(api)
        .then(response => response.json())
        .then(data => {
            setUsuarios([...usuarios,data.results[0]]); // Guardar directamente el primer usuario en el array
          })
    }
    


    //el segundo argumento de la función de callback (que en este caso es index) se pasa automáticamente como un número.
  return (
    <div>
      {usuarios.map((usuario, index) => (
        <div key={index}>
          <h3>{usuario.name.first} {usuario.name.last}</h3>
          <p>Email: {usuario.email}</p>
          <img src={usuario.picture.medium} alt={`${usuario.name.first} ${usuario.name.last}`} />
        </div>
      ))}
      <button onClick={agregar}>Agregar</button>
    </div>
  )
}

export default Exercise3
