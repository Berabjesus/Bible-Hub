import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const About = ({ history }) => (
  <article className="centered text-white w-100 text-center">
    <h2>Bible Hub web application</h2>
    <p>Created by Bereket A. Beshane</p>
    <p>Content from https://api.biblia.com</p>
    <button className="d-flex mx-auto button_noBg text-white mt-3 border p-2" type="button" onClick={history.goBack}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: 'White', fontSize: '25px' }}
      />
      <p className="ml-2">Go back</p>
    </button>
  </article>
);

About.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default About;
