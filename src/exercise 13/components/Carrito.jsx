import React from 'react'

const Carrito = ({productoSelect,eliminar}) => {
  return (
    <div>
      <div className='carrito'>
            <ol>
                <li>{productoSelect} </li>
                <button onClick={eliminar}>Eliminar</button>
            </ol>
        </div>
    </div>
  )
}

export default Carrito
