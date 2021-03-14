import React from 'react'
import {useSelector} from 'react-redux'
import contentCss from './content.module.css'

const Content = () => {
  const contentBgColor = useSelector(state => state.darkMode)
  const data = useSelector((state) => state.content)
  
  return (
    <article className={`pl-3 pr-1 ${contentCss.article} border_custom`} style={contentBgColor}>
      {
        data.content.text && <div>
          {data.content.text}
        </div>
      }
    </article>
  )
}

export default Content