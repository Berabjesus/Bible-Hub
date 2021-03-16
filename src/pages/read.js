import React from 'react';
import Sidebar from '../components/read/sidebar';
import Content from '../components/read/content';
import Footer from '../components/read/footer'

const Read = props => {
  const { id, title, languages } = props.location && props.location.state;
  const [verseInfo, setVerseInfo] = React.useState('')

  return (
    <section>
      <Sidebar id={id} setInfo = {setVerseInfo}/>
      <Content info = {verseInfo} />
      <Footer />
    </section>
  );
};

export default Read;
