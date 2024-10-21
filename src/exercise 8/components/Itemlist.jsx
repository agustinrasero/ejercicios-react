import React from 'react'


const Itemlist = ({item,onDelete}) => {

  return (
    <li>
      {item}
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>
        Eliminar
      </button>
    </li>
  )
}

export default Itemlist
