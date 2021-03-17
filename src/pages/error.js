import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Error = ({ history }) => (
  <div className="centered text-white w-100 mx-auto text-center">
    <p className="display-4">404: Page Not Found</p>
    <button className="d-flex mx-auto button_noBg text-white mt-3 border p-2" type="button" onClick={history.goBack}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: 'White', fontSize: '25px' }}
      />
      <p className="ml-2">Go back</p>
    </button>

  </div>
);

Error.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Error;
