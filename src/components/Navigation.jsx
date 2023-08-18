import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navegation() {
  return (
    <nav className='h-32 bg-[#dbeaff98] flex items-center justify-around'>
        <Link 
            className='links-layout'
            to={'/'}>
            Home
        </Link>
        <Link 
            className='links-layout'
            to={'/contacto'}>
            Contacto
        </Link>
        <Link 
            className='links-layout'
            to={'/imagenes'}>
            Imagenes
        </Link>
    </nav>
  )
}

export default Navegation


