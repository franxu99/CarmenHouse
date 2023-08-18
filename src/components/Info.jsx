import React from 'react'
import Description from './description'
import Services from './Services'
import Footer from './Footer'
import Ubication from './Ubication'
import { Link } from 'react-router-dom'
import './info.css'


function Info() {
  return (
    <>
        <div className='flex justify-center mt-10 '>
            <div className='w-2/3 h-96 flex justify-around bg-[#ecf2fbcc] p-4 border rounded'>
                <Description />
                <div className='flex items-center justify-center'>
                    <img className='h-[100%] rounded' src="src\assets\piscina.jpg" alt="" />
                    <Link 
                        className='absolute p-5 hover:bg-[#ffffff47] rounded font-bold hover:text-lg hover:underline'
                        to={'/imagenes'}
                    >
                        Ver Más
                    </Link>
                </div>
            </div>
        </div>
        <div className='mt-10 p-10 bg-[#ecf2fbcc] flex'>
            <Services />
            <Ubication />
        </div>
        <Footer />
    </>
  )
}

export default Info