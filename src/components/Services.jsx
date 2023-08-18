import React from 'react'

function Services() {
  return (
    <div className='h-[40rem] w-1/2 flex flex-col justify-center'>
        <h1 className='font-semibold text-4xl text-center'>Servicios Casa</h1>
        <div className='h-[100%] w-[100%] mt-10 flex justify-end'>
            <ul className='h-[100%] w-[70%] list-disc grid grid-cols-2 gap-3 justify-center text-xl columns-2 '>
                <li>Piscina <img className='h-5' src="src\assets\nadador.png" alt="" /></li>
                <li>Wifi Gratis <img className='h-4' src="src\assets\wifi.png" alt="" /></li>
                <li>Parking privado<img className='h-4' src="src\assets\estacionamiento.png" alt="" /> </li>
                <li>Aire Acondicionado por toda la casa</li>
                <li>Barbacoa </li>
                <li>Tabla de pin pon </li>
                <li>Dardos </li>
                <li>TV <img className='h-4' src="src\assets\monitor-de-tv.png" alt="" /></li>
                <li>Cocina </li>
                <li>Fogón interior </li>
                <li>Horno </li>
                <li>Microondas </li>
                <li>3 Baños <img className='h-4' src="src\assets\banera.png" alt="" /> </li>
            </ul>
        </div>
    </div>
  )
}

export default Services