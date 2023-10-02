import React from 'react'
import Footer from '../components/Footer'
import { images } from '../data/data'
import Navegation from '../components/Navigation'

function Imagenes() {
  return (
    <>
        <Navegation />
        <div className='flex items-center justify-center mt-10 mb-10'>
          <section className='h-[80vh] w-[90vw] bg-[#ecf2fbcc] rounded'>
            <h1 className='text-center text-3xl mt-5 font-bold'>Imágenes</h1>
            <div className='flex flex-wrap justify-around'>
                {images.map((image, index) => (
                  <img className='w-[20vw] h-[20vh] mt-5 object-cover hover:cursor-pointer' key={index} src={image} alt="" />
                ))}
              
            </div>
          </section>

        </div>
      
      <Footer />
    
    </>
    
  )
}

export default Imagenes