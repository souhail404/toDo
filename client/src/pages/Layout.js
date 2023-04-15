import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="super-container" id='super-container'>
      <Outlet />
    </div>
        
  )
}

export default Layout