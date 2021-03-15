import * as homeTypes from '../types/homeTypes';

export const biblesLoading = () => ({
  type: homeTypes.BIBLE_VERSIONS_FETCH_REQUEST,
});

export const biblesFetchSuccess = data => ({
  type: homeTypes.BIBLE_VERSIONS_FETCH_SUCCESS,
  payload: data,
});

export const biblesFetchFail = data => ({
  type: homeTypes.BIBLE_VERSIONS_FETCH_FAIL,
  payload: data,
});

export const fetchBibles = () => dispatch => {
  dispatch(biblesLoading());
  fetch('https://thingproxy.freeboard.io/fetch/http://api.biblia.com/v1/bible/find.txt?key=fd37d8f28e95d3be8cb4fbc37e15e18e')
    .then(response => response.json())
    .then(data => {
      dispatch(biblesFetchSuccess(data));
      return data;
    })
    .catch(error => {
      dispatch(biblesFetchFail(error.message));
      return error;
    });
};
