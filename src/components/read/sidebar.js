import React from 'react'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sidebarCss from './sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={`d-flex justify-content-between ${sidebarCss.aside} border_custom`}>
      <div>Books</div>
      <div>Chapter</div>
      <button>
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
    </aside>
  )
}

export default Sidebar