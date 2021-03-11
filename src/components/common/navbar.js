import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='d-flex'>
      <Link to='/'>Home</Link>
      <Link to='/user'>User</Link>
    </nav>
  )
}

export default Navbar