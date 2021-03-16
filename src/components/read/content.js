import React, { createRef } from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import contentCss from './content.module.css';
import { RotateSpinner } from 'react-spinners-kit';
import ToolTip from './tooltip'
const Content = ({info}) => {
  const contentBgColor = useSelector(state => state.darkMode);
  const data = useSelector(state => state.content);
  const [toolTipProps, setToolTipProps] = React.useState({position: 'absolute', display: 'none',top: 0, right: 0})

  const toolTipHandle = (top, left) => {
    if (toolTipProps.right === left && toolTipProps.top ===  `${top - 25}px`) {
      toolTipProps.display === 'flex' ? setToolTipProps({...toolTipProps, display: 'none'}) : setToolTipProps({...toolTipProps, display: 'flex'})
    } else {
      setToolTipProps({...toolTipProps, display: 'flex', top: `${top - 25}px`, right: left})
    }
  }
  return (
    <article className={`pl-3 pr-1 ${contentCss.article}`} style={contentBgColor}>
      {data.loading ? (
        <span className={`${contentCss.centered}`}>
          <RotateSpinner size={80} color={contentBgColor.color} loading />
          ;
        </span>
      )
        : data.error.length > 0 ? (
          <span className={`${contentCss.centered}`} style={{color: contentBgColor.color}}>
            <h3>Error fetching data, Try again later</h3>
          </span>
        ) : 
        (
        data.content.text && (
        <div className='position-relative'>
          <ToolTip style={toolTipProps} />
          {parse(data.content.text, {
            replace: function(domNode) {
              if (domNode.type === 'tag' && domNode.name === 'p' && domNode.children.length > 3) {
                let verse = {...{...domNode.children[2].children}['0']}.data
                let verseNum = {...{...domNode.children[1].children[0].children}['0']}.data
                return <p className={`${contentCss.focus}`} onClick={(e)=> {
                  toolTipHandle(e.target.offsetTop, e.target.offsetLeft)
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
        )
      }
    </article>
  );
};

export default Content;
