import React from 'react'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sidebarCss from './sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={`d-flex justify-content-between ${sidebarCss.aside} border_custom`}>
      <div>Books</div>
      <div className='border-left'>Chapter</div>
      <button className={` align-self-center ${sidebarCss.toggle}`}>
        <FontAwesomeIcon icon={faArrowRight}style={{ color: "White", fontSize: "15px" }}/>
      </button>
    </aside>
  )
}

export default Sidebar