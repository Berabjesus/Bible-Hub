import React from 'react'
import { Link } from 'react-router-dom';
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navbarCss from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={'d-flex justify-content-between align-items-center px-2 ' + navbarCss.navbar_custom}>
      <a href="#"><FontAwesomeIcon icon={faCog} style={{ color: 'White' }} /></a>
      {/* <Link to='/'>Home</Link>
      <Link to='/user'>User</Link> */}
      <p className='text-white navbar-brand'>Bible Hub</p>
      <a href="#"> <FontAwesomeIcon icon={faSearch} style={{color: 'white'}}/></a>
    </nav>
  )
}

export default Navbar