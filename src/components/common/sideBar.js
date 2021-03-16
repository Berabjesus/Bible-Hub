import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sideBarCss from './sidebar.module.css';
import { setDark, setLite } from '../../actions/darkModeAction';

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
        <li className="col-12">
          <button type="button" className={`w-100 ${sideBarCss.button}`} onClick={handleDarkModeToggle}><small>Dark Mode</small></button>
        </li>
        <li className="col-12">
          <Link to="/favorites"> Favorites </Link>
        </li>
        <li className="col-12">
          <Link to="/about"> About </Link>
        </li>
        <li className="col-12">
          <button type="button" className={`w-100 ${sideBarCss.button}`}>Clear User Preference</button>
        </li>
      </ul>
    </aside>
  );
};

SideBar.propTypes = {
  slide: PropTypes.string.isRequired,
};

export default SideBar;
