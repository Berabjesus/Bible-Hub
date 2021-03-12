import React from 'react'
import { Link } from 'react-router-dom';
import { faCog, faSearch, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navbarCss from './navbar.module.css'
import SearchBar from './searchBar'
import SideBar from './sideBar'

export const Navbar = () => {
  const [display, setDisplay] = React.useState('d-none')
  const [searchIcon, setSearchIcon] = React.useState(faSearch)

  const searchClickHandler = () => {
    display === 'd-flex' ? setDisplay('d-none') : setDisplay('d-flex')
    searchIcon === faSearch ? setSearchIcon(faWindowClose) : setSearchIcon(faSearch)
  }
  return (
    <header className='row w-100 mx-0 position-fixed border-bottom-0'>
      <nav className={`col-12 d-flex justify-content-between align-items-center px-2 py-2  + ${navbarCss.display}`}>
        <a href="#void"><FontAwesomeIcon icon={faCog} style={{ color: 'White' }} /></a>
        {/* <Link to='/'>Home</Link>
        <Link to='/user'>User</Link> */}
        <Link  to='/'><p className='text-white h4 mb-0'>Bible Hub</p></Link>
        <a href="#" onClick={searchClickHandler}> <FontAwesomeIcon icon={searchIcon} style={{color: 'white'}}/></a>
      </nav>
      <SearchBar ShowHide={display} />

    </header>
  )
}

export default Navbar