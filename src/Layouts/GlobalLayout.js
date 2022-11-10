import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const GlobalLayout = () => {
  return (
    <div className="global-layout">
    <NavBar />
    <Outlet /> 
    <Footer />
    </div>
  )
}

export default GlobalLayout