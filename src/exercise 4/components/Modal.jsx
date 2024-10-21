import React from 'react'

const Modal = ({abierto,cerrar,children}) => {
    if (!abierto) return null; //: Si el prop 'abierto' es false, el componente no se renderiza y retorna null. Esto asegura que el modal solo se muestra cuando abierto es true.

    //Al hacer clic en este botón (cerrar), se llama a la función cerrar, que se pasa como prop.
  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <button className='modal-close' onClick={cerrar}>Cerrar</button> 
            {children}
        </div>
    </div>
  )
}

export default Modal
