import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <div className="global-layout">
    <NavBar />
    <Outlet/> 
    </div>
  )
}

export default GlobalLayout