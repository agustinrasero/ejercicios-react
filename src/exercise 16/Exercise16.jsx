import React,{useState} from 'react';
/*
    Ejercicio 14: Selector de Idioma
    Crea una aplicación que permita cambiar el idioma de la interfaz.

    Requisitos:

    -Un estado para almacenar el idioma seleccionado.
    -Un menú desplegable para seleccionar el idioma.
    -Muestra texto en el idioma seleccionado.
*/
const Exercise16 = () => {
    const [idioma, setIdioma] = useState('es') // Estado para almacenar el idioma seleccionado

    const cambio = (e) =>{
        setIdioma(e.target.value)
    }

    console.log(idioma)
    return (
        <div>
            <select onChange={(e)=>cambio(e)}>
                <option value="es" >Español</option>
                <option value="en" >Inglés</option>
                <option value="fr" >Francés</option>
            </select>
            {idioma === 'es' && <h4>Hola, este texto esta en el idioma: {idioma.toUpperCase()}</h4>}
            {idioma === 'en' && <h4>Hello, this text is in the language: {idioma.toUpperCase()}</h4>}
            {idioma === 'fr' && <h4>Bonjour, ce texte est dans la langue: {idioma.toUpperCase()}</h4>}
        </div>
    );
};

export default Exercise16;