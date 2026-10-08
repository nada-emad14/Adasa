import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <div className="mt-18 selection:bg-orange-500 selection:text-white">
        <ScrollRestoration/>
      <Outlet/></div>
      <Footer/>
    </>
  )
}
