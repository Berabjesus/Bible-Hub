import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faMoon as faMoonUnchecked } from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faList,
  faMoon as faMoonChecked,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import footerCss from './footer.module.css';
import { setDark, setLite } from '../../actions/darkModeAction';

const Footer = () => {
  const darkModeState = useSelector(state => state.darkMode);

  const dispatch = useDispatch();
  const handledarkModeCheck = () => {
    if (darkModeState.background === 'white') {
      dispatch(setDark('#100C1A'));
    } else {
      dispatch(setLite());
    }
  };

  return (
    <div className={`d-flex justify-content-between py-4 pr-2 pl-1 align-items-center ${footerCss.bottom}`}>
      <button
        type="button"
        className={`${footerCss.button}`}
        onClick={handledarkModeCheck}
      >
        <FontAwesomeIcon
          icon={darkModeState.background === 'white' ? (faMoonUnchecked) : (faMoonChecked)}
          style={{ color: 'White', fontSize: '18px' }}
        />
        <small className="text-white d-block">{darkModeState.background === 'white' ? 'Dark' : 'Lite'}</small>
      </button>
      <Link to="/" className="d-flex flex-column align-items-center">
        <FontAwesomeIcon
          icon={faHome}
          style={{ color: 'White', fontSize: '18px' }}
        />
        <small>Home</small>
      </Link>
      <Link to="/favorites" className="d-flex flex-column align-items-center">
        <FontAwesomeIcon
          icon={faList}
          style={{ color: 'White', fontSize: '18px' }}
        />
        <small>List</small>
      </Link>
    </div>
  );
};

export default Footer;
