import * as loadType from '../types/loadType'

export const contentLoading = () => {
  return {
    type: loadType.FETCH_REQUEST
  }
}

export const contentFetchSuccess = (data) => {  
  return {
    type: loadType.FETCH_SUCCESS,
    payload: data
  }
}

export const contentFetchFail = (data) => {
  return {
    type: loadType.FETCH_FAIL,
    payload:data
  }
}

export const fetchPassages= (version) => {
  return (dispatch) => {    
    dispatch(contentLoading())
    fetch(`https://api.biblia.com/v1/bible/contents/${version}?key=fd37d8f28e95d3be8cb4fbc37e15e18e`)
      .then(response => response.json())
      .then(data => {
       dispatch(contentFetchSuccess(data))
       return data;
      })
      .catch(error => {
       dispatch(contentFetchFail(error.message))
       return error
      })
  }
}