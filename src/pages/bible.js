import React from 'react';
import PropTypes from 'prop-types';
import bibleCss from './bible.module.css';
import Image from '../components/bible/image';
import Header from '../components/bible/header';
import Footer from '../components/bible/footer';

export const User = ({ location }) => {
  const {
    id, description, image, title, languages,
  } = location && { ...location.state };

  return (
    <section className={`position-relative d-flex flex-column justify-content-between ${bibleCss.wrapper} `}>
      <Image image={image} title={title} />
      <Header title={title} languages={languages} />
      <Footer id={id} title={title} description={description} languages={languages} />
    </section>
  );
};

User.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default User;
