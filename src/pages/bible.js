import React from 'react';
import { faArrowLeft, faStar as faStarChecked } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarUnchecked } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bibleCss from './bible.module.css';
import Image from '../components/bible/image';
import Header from '../components/bible/header';
import Footer from '../components/bible/footer';

export const User = props => {
  const {
    id, description, image, title, languages,
  } = props.location && props.location.state;

  return (
    <section className={`position-relative d-flex flex-column justify-content-between ${bibleCss.wrapper} `}>
      <Image image={image} title={title} />
      <Header title={title} languages={languages} />
      <Footer id={id} title={title} description={description} languages={languages} />
    </section>
  );
};

export default User;
