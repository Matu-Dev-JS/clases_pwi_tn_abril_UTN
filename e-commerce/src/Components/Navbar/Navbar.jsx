import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h2>Logo</h2>
        <nav>
            <NavLink to={'/contacto'}>Contacto</NavLink>
            <NavLink to={'/carrito'}>Carrito</NavLink>
        </nav>
        
    </header>
  )
}

export default Navbar