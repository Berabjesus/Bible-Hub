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
  fetch('https://jsonp.afeld.me/?url=https://api.biblia.com/v1/bible/find?key=b549e5a24783d7026ee2203e9629254e', { mode: 'cors' })
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
