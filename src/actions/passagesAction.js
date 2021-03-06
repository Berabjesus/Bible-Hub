import * as passageTypes from '../types/passageTypes';

export const passgaesLoading = () => ({
  type: passageTypes.PASSAGE_FETCH_REQUEST,
});

export const passgaesFetchSuccess = data => ({
  type: passageTypes.PASSAGE_FETCH_SUCCESS,
  payload: data,
});

export const passgaesFetchFail = data => ({
  type: passageTypes.PASSAGE_FETCH_FAIL,
  payload: data,
});

export const fetchPassages = version => dispatch => {
  dispatch(passgaesLoading());
  fetch(
    `https://api.biblia.com/v1/bible/contents/${version}?key=fd37d8f28e95d3be8cb4fbc37e15e18e`,
  )
    .then(response => response.json())
    .then(data => {
      dispatch(passgaesFetchSuccess(data));
      return data;
    })
    .catch(error => {
      dispatch(passgaesFetchFail(error.message));
      return error;
    });
};
