import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Description from './Description'
import Services from './Services'
import Ubication from './Ubication'
import imgPiscina from '../img/piscina.jpg'
import imgPatioMedio from '../img/patio-medio1.jpeg'
import imgSalon from '../img/salon1.jpeg'
import imgPatioBajo from '../img/patio-bajo1.jpeg'

import './info.css'


function Info() {

  return (
    <>
        <div className='flex justify-center mt-10 '>
            <div className='info w-2/3 h-96 flex justify-around bg-[#dbeaffe5] p-4 border rounded'>
                <Description />
                <div className='carrusel h-[100%] w-[28%] flex items-center justify-center'>
                    <Carousel autoPlay className='h-[80%] w-[100%] 2xl:mb-10'>
                        <div className=''>
                            <img src={imgPiscina} alt="" />
                            <p className="legend">Piscina</p>
                        </div>
                        <div>
                            <img src={imgPatioBajo} alt="" />
                            <p className="legend">Patio bajo</p>
                        </div>
                        <div>
                            <img src={imgPatioMedio} alt="" />
                            <p className="legend">Barbacoa</p>
                        </div>
                        <div>
                            <img src={imgSalon} alt="" />
                            <p className="legend">Salón</p>
                        </div>
                        
                    {/* Agrega más imágenes según sea necesario */}
                    </Carousel>
                </div>
                
            </div>
        </div>
        <div className='services-ubication mt-10 mb-10 p-10 bg-[#dbeaffe5] flex'>
            <Services />
            <Ubication />
        </div>
    </>
  )
}

export default Info