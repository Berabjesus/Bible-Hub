import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../containers/bible/wrapper';

const Bible = ({ location }) => (
  <Wrapper location={location} />
);

Bible.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Bible;
