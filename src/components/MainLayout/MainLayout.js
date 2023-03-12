import React from 'react'
import Navbar from '../Navbar/Navbar'
import './MainLayout.css'
const MainLayout = ({children}) => {
  return (
    <div className='main__layout_conatiner'>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout