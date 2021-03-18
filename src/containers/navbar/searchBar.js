import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import searchbarCss from './searchbar.module.css';
import filterBibles from '../../actions/filterAction';

const SearchBar = ({ ShowHide }) => {
  const dispatch = useDispatch();

  const searchHandler = input => {
    dispatch(filterBibles(input.toLowerCase()));
  };

  return (
    <div
      className={`row mx-0 px-0 border col-12 ${ShowHide} form-group ${searchbarCss.display}`}
    >
      <input
        className="col-12 py-1"
        type="text"
        placeholder="Search for a version"
        onChange={e => searchHandler(e.target.value)}
      />
    </div>
  );
};
SearchBar.propTypes = {
  ShowHide: PropTypes.string.isRequired,
};

export default SearchBar;
