import React from 'react';
import { Link } from 'react-router-dom';
import { faCog, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navbarCss from './navbar.module.css';
import SearchBar from '../../containers/navbar/searchBar';
import SideBar from '../../containers/navbar/sideBar';

const Navbar = () => {
  const [searchBar, setSearchBar] = React.useState('d-none');
  const [sideBar, setSidebar] = React.useState('slideLeft');
  const [searchIcon, setSearchIcon] = React.useState(faSearch);
  const [settingIcon, setSettingIcon] = React.useState(faCog);
  const searchClickHandler = () => {
    if (searchBar === 'd-flex') {
      setSearchBar('d-none');
    } else {
      setSearchBar('d-flex');
    }
    if (searchIcon === faSearch) {
      setSearchIcon(faWindowClose);
    } else {
      setSearchIcon(faSearch);
    }
  };

  const settingsClickHandler = () => {
    if (sideBar === 'slideRight') {
      setSidebar('slideLeft');
    } else {
      setSidebar('slideRight');
    }

    if (settingIcon === faCog) {
      setSettingIcon(faWindowClose);
    } else {
      setSettingIcon(faCog);
    }
  };

  return (
    <header className="row w-100 mx-0 position-fixed border-bottom-0">
      <nav className={`col-12 d-flex justify-content-between align-items-center px-2 py-2  + ${navbarCss.display}`}>
        <button type="button" className="button_noBg" onClick={settingsClickHandler} aria-label="Setting" aria-hidden="true"><FontAwesomeIcon icon={settingIcon} style={{ color: 'White', fontSize: '25px' }} /></button>
        <Link to="/"><p className="text-white h4 mb-0">Bible Hub</p></Link>
        <button type="button" className="button_noBg" href="#" onClick={searchClickHandler}>
          <FontAwesomeIcon icon={searchIcon} style={{ color: 'white', fontSize: '25px' }} />
        </button>
      </nav>
      <SearchBar ShowHide={searchBar} />
      <SideBar slide={sideBar} />
    </header>
  );
};

export default Navbar;
