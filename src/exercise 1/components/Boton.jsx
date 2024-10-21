import React from 'react'

const Boton = (props) => {
  return (
    <>
    <button className='btn1' onClick={props.onClick}>{props.name}</button>
    </>
  )
}

export default Boton
