import React from 'react'
import searchbarCss from './searchbar.module.css'
export const SearchBar = ({ShowHide}) => {  
  return (
    <div className={`row mx-0 px-0 border col-12 ${ShowHide} form-group ${searchbarCss.display}`} >
      <input className='col-9 py-1' type="text" placeholder='Search for a version'/>
      <button type='button' className='col-3'>Search</button>
    </div>
  )
}

export default SearchBar