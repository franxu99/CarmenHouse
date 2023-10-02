import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react'
import axios from 'axios'

function Contacto() {
    const [email, setEmail] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            descripcion: descripcion
        }
        try{
            await axios.post('/api/send-email', formData); // Envía los datos al servidor backend
            alert('Correo enviado con éxito');
            setFormData({ email: '', description: '' }); // Limpia el formulario después de enviar
        }catch(error){
            console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el correo');
        }

        emailInput.value = "";
        descripcionInput.value = "";
    }

  return (
    <>
        <Navegation />
        <div className='flex items-center justify-center mt-10 mb-10'>
            <form className='p-16 flex flex-col items-center gap-10 justify-center bg-[#dbeaffe5] rounded' method='POST' onSubmit={handleSubmit}>
                <h2 className='text-3xl font-normal underline select-none'>Envíanos un mensaje con tu consulta!😊</h2>
                <div className='w-[25vw] flex justify-between'>
                    <label className='text-xl font-medium' htmlFor="emailInput">Email</label>
                    <input className='w-64 h-11' type="email" name="email" id="emailInput" placeholder='Escribe tu email...' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='w-[25vw] flex justify-between'>
                    <label className='text-xl font-medium' htmlFor="descripcionInput">Descripción</label>
                    <textarea className='w-64' name="" id="descripcionInput" cols="30" rows="10" placeholder='Escribe tu pregunta aquí...' onChange={(e) => setDescripcion(e.target.value)}></textarea>
                </div>
                <button className='links-layout rounded cursor-pointer' type="submit">Enviar</button>
            </form>
        </div>
        <Footer page="Contacto"/>
    </>
  )
}

export default Contacto