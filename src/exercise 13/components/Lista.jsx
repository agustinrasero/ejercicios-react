import React from 'react'

const Lista = ({producto,imagen,precio,agregar}) => {
  return (
    <>
        <div className='lista'>
            <img src={imagen}></img>
            <h3>{producto}</h3> <h3>${precio}</h3>
            <button onClick={agregar}>Agregar</button>
        </div>
    </>
  )
}

export default Lista
