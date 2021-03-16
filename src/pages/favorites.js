import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Favorites = ({ history }) => (
  <div className="centered d-flex flex-column align-items-center">
    <h2 style={{ color: 'white' }}>Purchase the Full version to store content</h2>
    <button className="button_noBg text-white mt-3 border p-2" type="button" onClick={history.goBack}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: 'White', fontSize: '25px' }}
      />
      Go back
    </button>
  </div>
);

Favorites.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Favorites;
