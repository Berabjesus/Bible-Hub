import React from 'react'

export const SideBar = () => {
  return (
    <aside className='position-fixed'>
      <ul>
        <li>
          <button type='button'>Dark Mode</button>
        </li>
        <li>
          <button>Clear User Preference</button>
        </li>
        <li>
          <Link> About </Link>
        </li>
      </ul>
    </aside>
  )
}


export default SideBar