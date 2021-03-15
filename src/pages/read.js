import React from 'react';
import Sidebar from '../components/read/sidebar';
import Content from '../components/read/content';
import Panel from '../components/read/panel'

const Read = props => {
  const { id, title, languages } = props.location && props.location.state;
  const [verseInfo, setVerseInfo] = React.useState('')

  return (
    <section>
      <Sidebar id={id} setInfo = {setVerseInfo}/>
      <Content info = {verseInfo} />
      <Panel />
    </section>
  );
};

export default Read;
