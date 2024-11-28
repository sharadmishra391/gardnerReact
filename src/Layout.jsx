import React from 'react'
import Topmenu from './Components/Topmenu';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
    <Topmenu />
    <Outlet />
    
        
    </>
    
  )
}

export default Layout;