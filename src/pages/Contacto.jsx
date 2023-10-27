import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import { useForm, ValidationError } from '@formspree/react'

function Contacto() {

        const [state, handleSubmit] = useForm("mpzgoljd");
        if (state.succeeded) {
            emailInput.value = "";
            descripcionInput.value = "";
            return <p>Gracias por contactar con nosotros! 😊</p>;
        }

    return (
    <>
        <Navegation />
        <div className='flex items-center justify-center mt-10 mb-10'>
            <form className='p-16 flex flex-col items-center gap-10 justify-center bg-[#dbeaffe5] rounded' onSubmit={handleSubmit}>
                <h2 className='text-3xl font-normal underline select-none'>Envíanos un mensaje con tu consulta!😊</h2>
                <div className='w-[25vw] flex justify-between'>
                    <label className='text-xl font-medium' htmlFor="emailInput">Email</label>
                    <input className='w-72 h-11 pl-2' type="email" name="email" id="emailInput" placeholder='Escribe tu email...' />
                    <ValidationError prefix='Email' field='email' errors={state.errors} />
                </div>
                <div className='w-[25vw] flex justify-between'>
                    <label className='text-xl font-medium' htmlFor="descripcionInput">Descripción</label>
                    <textarea className='w-72 pl-2 pt-2' name="descripcion" id="descripcionInput" cols="30" rows="10" placeholder='Escribe tu pregunta aquí...'></textarea>
                    <ValidationError prefix='DescripcionInput' field='descripcionInput' errors={state.errors} />
                </div>
                <button className='links-layout rounded cursor-pointer' type="submit" disabled={state.submitting}>Enviar</button>
            </form>
        </div>
        <Footer page="Contacto"/>
    </>
    )
}

export default Contacto