import React, { createRef } from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import contentCss from './content.module.css';

const Content = ({info}) => {
  const contentBgColor = useSelector(state => state.darkMode);
  const data = useSelector(state => state.content);
  const [popupProps, setPopupProps] = React.useState({position: 'absolute', display: 'none',top: 0, right: 0})

  const popupHandle = (top, left) => {
    if (popupProps.right === left && popupProps.top === top) {
      popupProps.display === 'flex' ? setPopupProps({...popupProps, display: 'none'}) : setPopupProps({...popupProps, display: 'flex'})
    } else {
      setPopupProps({...popupProps, display: 'flex', top: top, right: left})
    }
  }
  return (
    <article className={`pl-3 pr-1 ${contentCss.article}`} style={contentBgColor}>
      {
        data.content.text && (
        <div className='position-relative'>
          <div style={popupProps}>
            <h1>test</h1>
          </div>
          {parse(data.content.text, {
            replace: function(domNode) {
              if (domNode.type === 'tag' && domNode.name === 'p') {
                let verse = {...{...domNode.children[2].children}['0']}.data
                let verseNum = {...{...domNode.children[1].children[0].children}['0']}.data
                return <p onClick={(e)=> {
                  // e.target.classList.add(contentCss.focus)
                  // console.log(e.target);
                  // e.target.appendChild(append)
                  popupHandle(e.target.offsetTop, e.target.offsetLeft)
                }}><sup>{verseNum}</sup>{verse}

                </p>

                // domNode.attribs = {...domNode.attribs, onClick: ()=>{
                //   let verseNum = {...{...domNode.children[1].children[a0].children}['0']}.data
                //   let verse = {...{...domNode.children[2].children}['0']}.data
                //   console.log(info, verseNum, verse);
                //   console.log(domNode);
                //   // domNode.attribs = {...domNode.attribs, class: contentCss.focus}
                // }}
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
