import * as contentTypes from '../types/contentTypes';

export const contentLoading = () => ({
  type: contentTypes.CONTENT_FETCH_REQUEST,
});

export const contentFetchSuccess = data => ({
  type: contentTypes.CONTENT_FETCH_SUCCESS,
  payload: data,
});

export const contentFetchFail = data => ({
  type: contentTypes.CONTENT_FETCH_FAIL,
  payload: data,
});

export const fetchContent = (version, passage) => dispatch => {
  dispatch(contentLoading());
  fetch(`https://api.biblia.com/v1/bible/content/${version}.html.json?passage=${passage}&style=oneVersePerLine&formatting=all&fullText=false&key=fd37d8f28e95d3be8cb4fbc37e15e18e`)
    .then(response => response.json())
    .then(data => {
      dispatch(contentFetchSuccess(data));
      return data;
    })
    .catch(error => {
      dispatch(contentFetchFail(error.message));
      return error;
    });
};
