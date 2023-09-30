import React from 'react'

function Footer({page}) {
  console.log(page)
  return (
                                //Para las paginas que tengan scroll y las que no se ajuste el footer
    <footer className={`${page ? 'absolute bottom-0 left-0' : '' } w-[100%] h-32  bg-[#dbeaffe5] flex items-center justify-around border-t border-black`}>
        <nav className='flex gap-20'>
            <p><span className='font-semibold'>Email:</span> javi.tonio@hotmail.com</p>
            <p><span className='font-semibold'>Teléfono:</span> 676956012</p>
            <a className='hover:text-blue-700 font-semibold' href="https://www.booking.com/hotel/es/hacienda-olivarera-vega-torrequebradilla1.es.html">Click Enlace Booking</a>
        </nav>
    </footer>
  )
}

export default Footer