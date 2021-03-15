import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import contentCss from './content.module.css';

const Content = ({info}) => {
  const contentBgColor = useSelector(state => state.darkMode);
  const data = useSelector(state => state.content);
  return (
    <article className={`pl-3 pr-1 ${contentCss.article}`} style={contentBgColor}>
      {
        data.content.text && (
        <div>
          {parse(data.content.text, {
            replace: function(domNode) {
              if (domNode.type === 'tag' && domNode.name === 'p') {
                domNode.attribs = {...domNode.attribs, onClick: ()=>{
                  let verse = {...{...domNode.children[1].children[0].children}['0']}.data
                  console.log(info, verse);
                }}
              }
            }
            })}
        </div>
        )
      }
    </article>
  );
};

export default Content;
