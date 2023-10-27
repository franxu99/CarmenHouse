import imgWifi from '../img/wifi.png'
import imgPiscina from '../img/nadador.png'
import imgEstacionamiento from '../img/estacionamiento.png'
import imgTv from '../img/monitor-de-tv.png'
import imgBanera from '../img/banera.png'

function Services() {
  return (
    <div className='services-box h-[40rem] w-1/2 flex flex-col justify-center'>
        <h1 className='font-semibold text-4xl text-center'>Servicios Casa</h1>
        <div className='h-[100%] w-[100%] mt-10 flex justify-end'>
            <ul className='h-[100%] w-[70%] list-disc grid grid-cols-2 gap-3 justify-center text-xl columns-2 '>
                <li>Piscina <img className='h-5' src={imgPiscina} alt="" /></li>
                <li>Wifi Gratis <img className='h-4' src={imgWifi} alt="" /></li>
                <li>Parking privado<img className='h-4' src={imgEstacionamiento} alt="" /> </li>
                <li>Aire Acondicionado por toda la casa</li>
                <li>Barbacoa </li>
                <li>Tabla de pin pon </li>
                <li>Dardos </li>
                <li>TV <img className='h-4' src={imgTv} alt="" /></li>
                <li>Cocina </li>
                <li>Fogón interior </li>
                <li>Horno </li>
                <li>Microondas </li>
                <li>3 Baños <img className='h-4' src={imgBanera} alt="" /> </li>
            </ul>
        </div>
    </div>
  )
}

export default Services