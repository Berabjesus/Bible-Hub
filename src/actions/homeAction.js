import * as loadType from '../types/loadType'

export const biblesLoading = () => {
  return {
    type: loadType.FETCH_REQUEST
  }
}

export const biblesFetchSuccess = (data) => {  
  return {
    type: loadType.FETCH_SUCCESS,
    payload: data
  }
}

export const biblesFetchFail = (data) => {
  return {
    type: loadType.FETCH_FAIL,
    payload:data
  }
}

export const fetchBibles= () => {
  return (dispatch) => {    
    dispatch(biblesLoading())
    fetch('https://thingproxy.freeboard.io/fetch/http://api.biblia.com/v1/bible/find.txt?key=fd37d8f28e95d3be8cb4fbc37e15e18e')
      .then(response => response.json())
      .then(data => {
       dispatch(biblesFetchSuccess(data))
       return data;
      })
      .catch(error => {
       dispatch(biblesFetchFail(error.message))
       return error
      })
  }
}