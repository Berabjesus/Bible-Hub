import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import sideBarCss from './sidebar.module.css'
import {setDark, setLite} from '../../actions/contentAction'

export const SideBar = ({slide}) => {
  const [ulState, setUlState] = React.useState('d-none')
  const contentBgColor = useSelector(state => state.content)
  const dispatch = useDispatch()
  React.useEffect(() => {
    slide === 'slideLeft' ? setUlState('d-none') : setUlState('d-block')
  }, [slide])

  const handleDarkModeToggle = () => {
    dispatch( contentBgColor.background === 'white' ? setDark('#100C1A') : setLite())
  }

  return (
    <aside className={`position-fixed d-flex flex-column ${sideBarCss.aside} ${sideBarCss[slide]}`}>
      <ul className={`row ${ulState}`}>
        <li className='col-12 mb-5'>
          <p>Settings</p>
        </li>
        <li className='col-12'>
          <button type='button' className={`w-100 ${sideBarCss.button}`} onClick={handleDarkModeToggle}><small>Dark Mode</small></button>
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