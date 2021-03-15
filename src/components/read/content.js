import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import contentCss from './content.module.css';

const Content = ({info}) => {
  const contentBgColor = useSelector(state => state.darkMode);
  const data = useSelector(state => state.content);
  // const [select, setSelect] = React.useState('')
  const popUp = <div className={`${contentCss.popup}`}>Test</div>

  return (
    <article className={`pl-3 pr-1 ${contentCss.article}`} style={contentBgColor}>
      {
        data.content.text && (
        <div>
          {parse(data.content.text)}
        </div>
        )
      }
    </article>
  );
};

export default Content;
