import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/read/sidebar';
import Content from '../components/read/content';
import Footer from '../components/read/footer';

const Read = ({ location }) => {
  const { id } = location && { ...location.state };
  const [verseInfo, setVerseInfo] = React.useState('');

  return (
    <section>
      <Sidebar id={id} setInfo={setVerseInfo} />
      <Content info={verseInfo} />
      <Footer />
    </section>
  );
};

Read.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Read;
