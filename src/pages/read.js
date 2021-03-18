import React from 'react';
import Sidebar from '../containers/read/sidebar';
import Content from '../containers/read/content';
import Footer from '../containers/read/footer';

const Read = () => {
  const [verseInfo, setVerseInfo] = React.useState('');

  return (
    <section>
      <Sidebar setInfo={setVerseInfo} />
      <Content info={verseInfo} />
      <Footer />
    </section>
  );
};

export default Read;
