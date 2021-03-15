import React from 'react'
import {useSelector} from 'react-redux'
import contentCss from './content.module.css'
import parse from 'html-react-parser';

const Content = () => {
  const contentBgColor = useSelector(state => state.darkMode)
  const data = useSelector((state) => state.content)
  
  return (
    <article className={`pl-3 pr-1 ${contentCss.article}`} style={contentBgColor}>
      {
        data.content.text && <div>
          {parse(data.content.text)}
        </div>
      }
    </article>
  )
}

export default Content