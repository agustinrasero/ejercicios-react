
import React,{useReducer} from 'react'


/*
    Ejercicio 10: Manejo de Reducers
    Crea un contador avanzado usando useReducer en lugar de useState. El contador debe:

    -Incrementarse, decrementarse y reiniciarse.
    -Tener un historial de las operaciones realizadas (por ejemplo, "+1", "-1").
    -Usa useReducer para manejar el estado del contador y el historial.
 */

const Exercise5 = () => {

    const valorInicial = {
        contador:0,
        accion:[]
    };



    const reducer = (state,action) =>{

        


        switch (action.type) {
            case 'sumar':
                return {contador: state.contador + 1, 
                        accion: [...state.accion,"+1 "]}

            case 'restar':
                if (state.contador > 0) {
                    return {contador: state.contador - 1, 
                        accion: [...state.accion,"-1 "]}
                }
                else{
                    return state;

                }
                

            case 'reiniciar':
                return {contador: state.contador = 0,
                    accion: [""]
                }

            default:
                break;
        }
    }

    const sumar = () =>{
        dispatch({type:'sumar'})
    }

    const restar = () =>{
        dispatch({type:'restar'})
    }

    const reinicio = () =>{
        dispatch({type:'reiniciar'})
    }


    const [contador,dispatch] = useReducer(reducer,valorInicial)

  return (
    <div className='contador-overlay'>
        <div>{contador.contador}</div>
        <div className='historial'>
            <h4>Historial:</h4>
            {contador.accion.map((accion,index)=>(
            <div className='numeros' key={index}><p>{accion}</p></div>
            ))}

        </div>
        <button onClick={sumar}>Incrementar</button>
        <button onClick={restar}>Decrementar</button>
        <button onClick={reinicio}>Reiniciar</button>
    </div>
  )
}

export default Exercise5
