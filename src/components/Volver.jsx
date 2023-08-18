import { Link } from 'react-router-dom'

function Volver() {
  return (
    <div className='p-10'>
        <Link 
            to={'/'}
            className='p-5 bg-[#6bcbff] hover:bg-[#0fb7ff] ease-in-out duration-700  border border-black rounded'
            >Volver
        </Link>
    </div>
  )
}

export default Volver