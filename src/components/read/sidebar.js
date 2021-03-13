import React from 'react'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sidebarCss from './sidebar.module.css'

const Sidebar = () => {
  const [slide, setSlide] = React.useState('slideRight')
  const [contentState, setContentState] = React.useState('d-flex')
  const [arrowState, setArrowState] = React.useState(faArrowLeft)

  const handleToggle = () => {
    if (slide === 'slideRight') {
      setSlide('slideLeft')
      setContentState('d-none')
      setArrowState(faArrowRight)
    } else {
      setSlide('slideRight') 
      setContentState('d-flex')
      setArrowState(faArrowLeft)
    }
  }
  return (
    <aside className={`row d-flex ${sidebarCss.aside} ${sidebarCss[slide]}`}>
      <div className={`flex-column text-white col-8 ${contentState}`}><small className='mx-auto'>Books</small></div>
      <div className={`flex-column text-white text-center border-left border-light px-1 ${contentState}`}><small className='mx-auto'>Chapter</small></div>
      <button className={` align-self-center ${sidebarCss.toggle}`} onClick={handleToggle}>
        <FontAwesomeIcon icon={arrowState}style={{ color: "White", fontSize: "15px" }}/>
      </button>
    </aside>
  )
}

export default Sidebar