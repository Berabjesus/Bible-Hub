import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import contentCss from './content.module.css';

const Content = () => {
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
                domNode.attribs = {...domNode.attribs, onClick: ()=>console.log('clcikeed')}
                let g = domNode.children[1].children[0].children
                let w = {...g}
                let r = w['0']
                let t = {...r}
                console.log(t.data);
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
