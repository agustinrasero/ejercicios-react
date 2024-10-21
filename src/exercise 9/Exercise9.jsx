import React,{useReducer,useState} from 'react'
import ItemList from './components/ItemList'



/*
    9. Componente de Lista de Tareas con Filtros:

    -Crea un componente que muestre una lista de tareas.
    -Implementa filtros para ver las tareas completadas, pendientes y todas.
    -Utiliza useReducer para manejar el estado global de la lista y los filtros.
*/
const Exercise9 = () => {



  const tareas = [
    {
        tarea: "Lavar", 
        estado:true
    },
    {
        tarea: "Limpiar", 
        estado:false
    },
    {
        tarea: "Correr", 
        estado:false
    },
    {
        tarea: "Bañarse", 
        estado:true
    },
    {
        tarea: "Comer", 
        estado:false
    },
  ]

 

  const reducer = (state,action) =>{
    switch (action.type) {
      case 'todas':
        return action.original;

      case 'pendiente':
        return action.original.filter(value => value.estado === false);

      case 'completada':
        return action.original.filter(value => value.estado === true);
      
      default:
        return state;
    }
  }

  const [original] = useState(tareas);
  const [filtro,dispatch] = useReducer(reducer,tareas)
  

  return (
    <div>
      <label >Filtrar por: </label>
      <select name="filtros" id="filtro" onChange={(e) => dispatch({type:e.target.value, original})}>
        <option value='todas' >Todas</option>
        <option value='pendiente'>Pendiente</option>
        <option value='completada'>Completada</option>
      </select>

      {filtro.map((value,i) =>(
        <ItemList key={i} map={value.tarea} estado={(value.estado === true) ? 'Completada' : 'Pendiente'}></ItemList>
      ))}
      
    </div>
  )
}

export default Exercise9
