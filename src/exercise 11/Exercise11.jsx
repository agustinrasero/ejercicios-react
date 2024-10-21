
import React,{useState,useEffect} from 'react'

/*
    7. Componente de Contador Avanzado:

    -Implementa un contador con varias características: 
        -incrementos personalizados 
        -doble clic para resetear
        -un botón para detener/iniciar el contador automáticamente.
    -Experimenta con useEffect para manejar los intervalos del contador.
*/

const Exercise11 = () => {
    const [tiempo,setTiempo] = useState(0)
    const [tiempoActualizar,setTiempoActualizar] = useState(1)
    const [guardarNumero,setGuardarNumero] = useState()


    
    useEffect(()=>{
        setTimeout(() => {
            if (tiempoActualizar != 0) {
                setTiempo(tiempo + Number(tiempoActualizar))
                setGuardarNumero(tiempoActualizar)
            }
        }, 1000);
        
        
    },[tiempo,tiempoActualizar])

    


    const detenerIniciar = () =>{
        

        if (tiempoActualizar != 0) {
            setTiempoActualizar(0)
        }
        else{
            setTiempoActualizar(guardarNumero)
            
        }

        
    }



  return (
    <div className='contador'>
        <label>Incremento personalizado </label>
        <input type='number' min='1' value={tiempoActualizar} onChange={(e)=>setTiempoActualizar(e.target.value)}></input>


        <div className='tiempo'>
            <h3 onDoubleClick={()=> (setTiempo(0)) }>{tiempo}</h3> 
        </div>
        <button onClick={detenerIniciar}>{(tiempoActualizar != 0 ? 'Detener':'Iniciar')}</button>
        
    </div>
  )
}

export default Exercise11
