import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Imagenes from './pages/Imagenes'
import Reservar from './pages/Reservar'
import Contacto from './pages/Contacto'
import './index.css'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path:'/',   //Página principal
    element: <Layout />
  },
  {
    path: '/imagenes',
    element: <Imagenes />
  },
  {
    path: '/reservar',
    element: <Reservar />
  },
  {
    path: '/contacto',
    element: <Contacto />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router = {router}
    />
  </React.StrictMode>,
)
