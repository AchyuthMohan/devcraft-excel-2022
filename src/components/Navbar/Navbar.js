import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    
  return (
    <div className='nav__main'>
        <Link to='/' className='nav__section'>Home</Link>
        <Link to='/plan' className='nav__section'>Diet Plans</Link>
        <Link to='/diet' className='nav__section'>Get Plan</Link>
        <Link to='/calculator'>Calorie Calculator</Link>
    </div>
  )
}

export default Navbar