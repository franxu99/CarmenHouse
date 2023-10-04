import React from 'react'
import { Link } from 'react-router-dom'

function Footer({page}) {
  return (
                                //Para las paginas que no tengan scroll y las que no se ajuste el footer
    <footer className={`${page ? 'absolute bottom-0 left-0' : '' } footer w-[100%] h-32  bg-[#dbeaffe5] flex items-center justify-around border-t border-black`}>
        <nav className='flex gap-20'>
            <p><span className='font-semibold'>Email:</span> javi.tonio@hotmail.com</p>
            <p><span className='font-semibold'>Teléfono:</span> 676956012</p>
            <Link className='hover:text-blue-700 font-semibold' to={'/reservar'}>Agencias de Reserva</Link>
        </nav>
    </footer>
  )
}

export default Footer