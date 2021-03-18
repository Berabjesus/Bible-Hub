import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { faMoon as faMoonUnchecked } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonChecked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setDark, setLite } from '../../actions/darkModeAction';
import sideBarCss from './sidebar.module.css';

const SideBar = ({ slide }) => {
  const [ulState, setUlState] = React.useState('d-none');
  const contentBgColor = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  React.useEffect(() => (slide === 'slideLeft' ? setUlState('d-none') : setUlState('d-block')), [slide]);

  const handleDarkModeToggle = () => {
    if (contentBgColor.background === 'white') {
      dispatch(setDark('#100C1A'));
    } else {
      dispatch(setLite());
    }
  };

  return (
    <aside className={`position-fixed d-flex flex-column ${sideBarCss.aside} ${sideBarCss[slide]}`}>
      <ul className={`row ${ulState}`}>
        <li className="col-12 mb-5">
          <p>Settings</p>
        </li>
        <li className="col-12 border mb-1">
          <button type="button" className={`w-100 ${sideBarCss.button}`} onClick={handleDarkModeToggle}>
            <span className="mr-2">Dark Mode</span>
            <FontAwesomeIcon
              icon={contentBgColor.background === 'white' ? (faMoonUnchecked) : (faMoonChecked)}
              style={{ color: 'White', fontSize: '18px' }}
            />
          </button>
        </li>
        <li className="col-12 border mb-1">
          <Link to="/" className="d-block w-100">Home</Link>
        </li>
        <li className="col-12 border mb-1">
          <Link to="/favorites" className="d-block w-100">Favorites</Link>
        </li>
        <li className="col-12 border mb-1">
          <Link to="/about" className="d-block w-100">
            About
          </Link>
        </li>
      </ul>
    </aside>
  );
};

SideBar.propTypes = {
  slide: PropTypes.string.isRequired,
};

export default SideBar;
