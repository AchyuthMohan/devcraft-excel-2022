import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    
  return (
    <div className='nav__main'>
        <Link to='/' className='nav__section'>Home</Link>
        <Link to='/plans' className='nav__section'>Diet Plans</Link>
        <Link className='nav__section'>Get Plan</Link>
    </div>
  )
}

export default Navbar