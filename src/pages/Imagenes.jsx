import React from 'react'
import Footer from '../components/Footer'
import Volver from '../components/Volver'
import { images } from '../data/data'

function Imagenes() {
  return (
    <>
      <main className='flex flex-col items-center justify-center mb-10'>
        <Volver />
        <section className='h-[80vh] w-[90vw] bg-[#ecf2fbcc]'>
          <h1 className='text-center text-3xl mt-5 font-bold'>Imágenes</h1>
          <div className='flex flex-wrap justify-around'>
              {images.map((image, index) => (
                <img className='w-[20vw] h-[20vh] mt-5 object-cover hover:cursor-pointer' key={index} src={image} alt="" />
              ))}
            
          </div>
        </section>
      </main>
      <Footer />
    
    </>
    
  )
}

export default Imagenes