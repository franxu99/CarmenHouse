import Footer from "../components/Footer"
import Navegation from "../components/Navigation"
import './Reservar.css'

//IMAGENES
import imgBooking from '../img/booking.png'
import imgAirbnb from '../img/airbnb.png'
import imgTripadvisor from '../img/tripadvisor.png'


function Reservar() {
  return (
    <>
    <main className="h-[86.6vh]">
        <Navegation />
        <div className="container-contacto flex justify-center items-center mt-20">
            <div className='container-agencias w-[70vw] flex flex-col items-center  bg-[#ecf2fbcc] rounded'>
                <h1 className='text-center text-3xl mt-5 font-bold'>Reserva en...</h1>
                <div className="w-[80%] flex items-center justify-between select-none">
                    <img src={imgBooking} alt="imgBooking" />
                    <a className="h-16 w-44 flex items-center justify-center rounded bg-[#6a82d2] font-semibold border border-black hover:bg-[#2e58a4] hover:text-white ease-in-out duration-700" 
                    href="https://www.booking.com/hotel/es/hacienda-olivarera-vega-torrequebradilla1.es.html">Booking</a>
                </div>
                <div className="w-[80%] flex items-center justify-between select-none">
                    <img className="h-20" src={imgAirbnb} alt="imgAirbnb" />
                    <a className="h-16 w-44 flex items-center justify-center rounded bg-[#ffacac] font-semibold border border-black hover:bg-[#f45d5d] hover:text-white ease-in-out duration-700" 
                    href="https://www.airbnb.es/rooms/850734743960733751?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-09-11&check_out=2023-09-18&source_impression_id=p3_1692368676_zWFK%2B5NQS4Par9Un&previous_page_section_name=1000&federated_search_id=7bd8b32d-f24c-4160-bb0d-9eabaf09aa0d">Airbnb</a>
                </div>
                <div className="w-[80%] flex items-center justify-between select-none">
                    <img src={imgTripadvisor} alt="imgTripadvisor" />
                    <a className="h-16 w-44 flex items-center justify-center rounded bg-[#80ff9d] font-semibold border border-black hover:bg-[#4bc75b] hover:text-white ease-in-out duration-700" 
                    href="">TripAdvisor</a>
                </div>
            </div>

        </div>
    </main>
        <Footer  />
    </>
    
  )
}

export default Reservar