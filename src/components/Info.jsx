import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Description from './description'
import Services from './Services'
import Ubication from './Ubication'

import './info.css'


function Info() {

  return (
    <>
        <div className='flex justify-center mt-10 '>
            <div className='w-2/3 h-96 flex justify-around bg-[#dbeaffe5] p-4 border rounded'>
                <Description />
                <div className='h-[100%] w-[28%] flex items-center justify-center'>
                    <Carousel autoPlay className='h-[100%] w-[100%]'>
                        <div className=''>
                            <img src="src\assets\piscina.jpg" alt="" />
                            <p className="legend">Piscina</p>
                        </div>
                        <div>
                            <img src="src\assets\WhatsApp Image 2023-07-25 at 19.10.05.jpeg" alt="" />
                            <p className="legend">Patio bajo</p>
                        </div>
                        <div>
                            <img src="src\assets\WhatsApp Image 2023-07-25 at 19.09.59 (2).jpeg" alt="" />
                            <p className="legend">Barbacoa</p>
                        </div>
                        <div>
                            <img src="src\assets\WhatsApp Image 2023-07-25 at 19.48.31.jpeg" alt="" />
                            <p className="legend">Salón</p>
                        </div>
                        
                    {/* Agrega más imágenes según sea necesario */}
                    </Carousel>
                </div>
                
            </div>
        </div>
        <div className='mt-10 mb-10 p-10 bg-[#dbeaffe5] flex'>
            <Services />
            <Ubication />
        </div>
    </>
  )
}

export default Info