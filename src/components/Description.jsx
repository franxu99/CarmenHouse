import { Link } from "react-router-dom"

function Description() {
  return (
    <div className='w-1/3 flex flex-col items-center justify-center'>

        <p className='text-justify'>
            ¡Bienvenidos a Carmen House en Torrequebradilla!

            Un rincón acogedor en plena naturaleza os espera para brindaros una experiencia inolvidable. <br /> <br /> 
            Nos complace recibirte en nuestra encantadora casa rural, donde la tranquilidad se fusiona con la belleza del entorno. 
            Carmen House es mucho más que un alojamiento, es un refugio donde podrás desconectar de la rutina y sumergirte en un oasis de serenidad.
        </p>
        <Link 
          className="mt-5 p-5 bg-[#6bcbff] rounded border border-black hover:bg-[#ff7280] hover:text-white ease-in-out duration-700 select-none"
          to={'/reservar'}
        >
          Reserva aquí
        </Link>
    </div>
  )
}

export default Description