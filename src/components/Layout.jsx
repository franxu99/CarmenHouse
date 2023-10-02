import React from 'react'
import '../index.css'
import Navigation from './Navigation'
import Info from './Info'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
        <Navigation />
        <div className='flex justify-center mt-10'>
            <h1 className='font-normal text-6xl min-w-min p-4 hover-title select-none cursor-pointer'>Carmen House</h1>
        </div>
        <Info />
        <Footer />
        <Outlet />
    </main>
  )
}

export default Layout