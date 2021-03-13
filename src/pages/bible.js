import React from 'react'
import bibleCss from './bible.module.css'

export const User = props => {
  const {description, image, title} = props.location && props.location.state
  
  return (
    <section className={`position-relative ${bibleCss.wrapper} `}>
      <div className={`position-absolute w-100 h-100 ${bibleCss.background} `} style={{ background: `url(${image}) no-repeat center/cover` }}>

      </div>
      <div className={`w-100 h-100` }>
        <img src={image} alt={`${title} image`} className={`w-100 h-100 ${bibleCss.img}`}/>
      </div>
    </section>
  )
}

export default User