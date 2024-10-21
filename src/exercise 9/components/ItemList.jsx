import React from 'react'

const ItemList = ({map,estado}) => {
  return (
    <div className='list-item'>
      <ol>
        <li>
            {map} <span>{estado}</span>
        </li>
      </ol>
    </div>
  )
}

export default ItemList
