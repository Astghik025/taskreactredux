import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <nav className="Navbar">  
        <div className="nav-items">
            <NavLink to='/'>Employees</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
        </div>
    </nav>
  )
}

export default Navbar