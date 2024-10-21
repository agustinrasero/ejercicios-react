import React,{useState,useRef,useEffect} from 'react'
/*
    Ejercicio 31: Temporizador de Cuenta Regresiva
    Crea un temporizador de cuenta regresiva que permita al usuario establecer el tiempo y comenzar la cuenta regresiva.

    Requisitos:

    -Un estado para almacenar el tiempo restante.
    -Inputs para establecer el tiempo inicial.
    -Un botón para iniciar la cuenta regresiva.
    -Muestra el tiempo restante y detén la cuenta regresiva cuando llegue a cero.
*/


const Exercise20 = () => {


    const [tiempo, setTiempo] = useState(0);
    const tomarValor = useRef();

    const comenzar =()=>{
        if (tiempo !== 0){
            setTiempo(0);

        }
        setTiempo(tomarValor.current.value);
    }

    useEffect(()=>{
        if (tiempo === 0) {
            setTiempo(0);
        }
        else {
            const interval = setInterval(()=>{
                setTiempo(tiempo => tiempo - 1); //Restamos 1 al tiempo
            },1000) //Se ejecuta cada segundo   
            return () => clearInterval(interval); //Limpiamos para liberar memoria
        }
    },[tiempo])

  return (
    <div>
        <h1>Temporizador de Cuenta Regresiva</h1>
        <input type='number' ref={tomarValor}></input>
        <button onClick={comenzar}>Comenzar</button>
        <h2>{tiempo}</h2>
    </div>
  )
}

export default Exercise20
