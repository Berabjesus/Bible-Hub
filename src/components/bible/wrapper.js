/* eslint-disable no-nested-ternary, max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';
import PropTypes from 'prop-types';
import wrapperCss from './wrapper.module.css';
import Image from './image';
import Header from './header';
import Footer from './footer';
import { fetchBibles } from '../../actions/homeAction';

const Wrapper = ({ location }) => {
  const params = useParams();
  const data = useSelector(state => state.home);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!data.stored) {
      dispatch(fetchBibles());
    }
  }, []);
  let content = null;
  if (params.id && data.bibles.bibles) {
    content = {
      id: params.id,
      ...data.bibles.bibles.find(element => element.bible === params.id),
    };
  }
  const {
    id, description, imageUrl, title, languages,
  } = content || (location && { ...location.state });

  return (
    <>
      {data.loading ? (
        <span className="centered">
          <RotateSpinner size={80} color="white" loading />
        </span>
      ) : id ? (
        <section
          className={`position-relative d-flex flex-column justify-content-between ${wrapperCss.wrapper} `}
        >
          <Image image={imageUrl} title={title} />
          <Header title={title} languages={languages} />
          <Footer
            id={id}
            title={title}
            description={description}
            languages={languages}
          />
        </section>
      ) : false}
    </>
  );
};

Wrapper.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Wrapper;
