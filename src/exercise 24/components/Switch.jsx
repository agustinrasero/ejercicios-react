import React from 'react'
import Contexto from '../Context/Contexto'
import { useContext } from 'react';

const Switch = () => {

    const {tema,dispatch,boton,setBoton} = useContext(Contexto);

    const accion = (event) => {
        if(event.target.checked){
            dispatch({type: 'oscuro'})
            setBoton(true)
            
        }else{
            
            dispatch({type: 'claro'})
            setBoton(false)
        }
    }

  return (
    <div class="switch-button">
        <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox" onClick={accion} checked={boton} />
        <label for="switch-label" class="switch-button__label"></label>
    </div>
  )
}

export default Switch
