import React from 'react';
import Sidebar from '../components/read/sidebar';
import Content from '../components/read/content';
import Footer from '../components/read/footer';

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
