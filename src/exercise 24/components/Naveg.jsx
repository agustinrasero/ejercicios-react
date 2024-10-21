import React from 'react'
import { NavLink } from 'react-router-dom'

const Naveg = () => {
  return (
    <div>
      <nav>
        <NavLink className={ ({isActive}) => (isActive ? "activado" : null ) } to='/'>Home </NavLink>
        <NavLink className={ ({isActive}) => (isActive ? "activado" : null ) } to='/inv'>Inventario </NavLink>
      </nav>
    </div>
  )
}

export default Naveg
