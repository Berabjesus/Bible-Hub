import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import headerCss from './headerAndFooter.module.css';

const Header = ({ title, languages }) => (
  <header
    className={`d-flex justify-content-between align-items-center px-2 py-1 font-josefin ${headerCss.header}`}
  >
    <Link to="/">
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: 'White', fontSize: '25px' }}
      />
    </Link>
    <strong>{title}</strong>
    <strong>{languages}</strong>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
