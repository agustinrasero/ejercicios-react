import React,{useEffect, useState} from 'react';
/*
    Ejercicio 11: Reloj en Tiempo Real
    Crea un componente que muestre la hora actual y se actualice cada segundo.

    Requisitos:

    Usa useState para almacenar la hora actual.
    Usa useEffect para actualizar la hora cada segundo.
    Muestra la hora en formato HH:MM:SS. 

*/
const Exercise15 = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        // Cada vez que el componente se monta, se crea un intervalo que se ejecuta cada segundo
        const interval = setInterval(()=>{
            // Actualiza el estado de 'hora' con la hora actual en formato HH:MM:SS
            setHora(new Date().toLocaleTimeString())
        },1000)
        // Cuando el componente se desmonta, se limpia el intervalo para evitar fugas de memoria
        return ()=> clearInterval(interval)
    },[])

    return (
        <div>
            <h1>{hora}</h1>
        </div>
    );
};

export default Exercise15;