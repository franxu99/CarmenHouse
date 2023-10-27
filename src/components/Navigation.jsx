import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navigation.css'

function Navegation() {
  return (
    <nav className='h-32 bg-[#dbeaffe5] flex items-center justify-around'>
        <NavLink
            to="/"
            className={({ isActive }) => ` ${isActive ? 'link-header-select' : 'links-header'} `}
        >
            HOME
        </NavLink>
        <NavLink 
            to={'/contacto'}
            className={({ isActive }) => ` ${isActive ? 'link-header-select' : 'links-header'}`}
            >
            CONTACTO
        </NavLink>
        <NavLink 
            to={'/imagenes'}
            className={({ isActive }) => ` ${isActive ? 'link-header-select' : 'links-header'}`}
            >
            IMÁGENES
        </NavLink>
    </nav>
  )
}

export default Navegation


