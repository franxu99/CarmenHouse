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
        <div className='divFormContacto flex items-center justify-center mt-10 mb-10'>
            <form className='formContacto p-16 flex flex-col items-center gap-10 justify-center bg-[#dbeaffe5] rounded' onSubmit={handleSubmit}>
                <h2 className='ttleForm text-3xl font-normal select-none'>ENVÍANOS UN MENSAJE CON TU CONSULTA!😊</h2>
                <div className='w-[55%] flex justify-between items-center'>
                    <label className='text-xl font-medium' htmlFor="emailInput">Email</label>
                    <input className='h-11 w-[70%] pl-2 border rounded border-black' type="email" name="email" id="emailInput" placeholder='Escribe tu email...' />
                    <ValidationError prefix='Email' field='email' errors={state.errors} />
                </div>
                <div className='w-[55%] flex justify-between items-center'>
                    <label className='text-xl font-medium' htmlFor="descripcionInput">Descripción</label>
                    <textarea className='w-[70%] pl-2 pt-2 pr-1 resize-none border border-black rounded' name="descripcion" id="descripcionInput" cols="30" rows="10" placeholder='Escribe tu pregunta aquí...'></textarea>
                    <ValidationError prefix='DescripcionInput' field='descripcionInput' errors={state.errors} />
                </div>
                <button className='w-28 links-btns rounded cursor-pointer' type="submit" disabled={state.submitting}>Enviar</button>
            </form>
        </div>
        <Footer page="contacto"/>
    </>
    )
}

export default Contacto