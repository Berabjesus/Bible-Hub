import React from 'react'
import itemCss from './item.module.css'

const Item = ({description, image, title}) => {
  return (
    <section className={`d-flex col-12 col-sm-6 col-lg-4 p-0 m-0 ${itemCss.wrapper} border_custom`}>
      <div className={`w-100 h-100 border_custom ${itemCss.background}`} style={{background: `url(${image}) no-repeat center/cover`}}></div>
      <img src={image} alt={`${title} image`} className={`${itemCss.image} mx-auto`} />
    </section>
  )
}
export default Item