import React from 'react'
import { Link } from 'react-router-dom';
import sideBarCss from './sidebar.module.css'

export const SideBar = () => {
  return (
    <aside className={`position-fixed d-flex flex-column col-6 ${sideBarCss.aside}`}>
      <ul className='row'>
        <li className='col-12 mb-5'>
          <p>Settings</p>
        </li>
        <li className='col-12'>
          <button type='button' className={`w-100 ${sideBarCss.button}`}>Dark Mode</button>
        </li>
        <li className='col-12'>
          <Link to='/favorites'> Favorites </Link>
        </li>
        <li className='col-12'>
          <Link to='/about'> About </Link>
        </li>
        <li className='col-12'>
          <button type='button' className={`w-100 ${sideBarCss.button}`}>Clear User Preference</button>
        </li>
      </ul>
    </aside>
  )
}


export default SideBar