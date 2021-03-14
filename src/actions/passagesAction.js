import * as loadType from '../types/loadType'

export const passgaesLoading = () => {
  return {
    type: loadType.FETCH_REQUEST
  }
}

export const passgaesFetchSuccess = (data) => {  
  return {
    type: loadType.FETCH_SUCCESS,
    payload: data
  }
}

export const passgaesFetchFail = (data) => {
  return {
    type: loadType.FETCH_FAIL,
    payload:data
  }
}

export const fetchContent= (version) => {
  return (dispatch) => {    
    dispatch(passgaesLoading())
    fetch(`https://api.biblia.com/v1/bible/content/${version}.html.json?passage=${book}${chapter}&style=oneVersePerLine&formatting=all&fullText=false&key=fd37d8f28e95d3be8cb4fbc37e15e18e`)
      .then(response => response.json())
      .then(data => {
       dispatch(passgaesFetchSuccess(data))
       return data;
      })
      .catch(error => {
       dispatch(passgaesFetchFail(error.message))
       return error
      })
  }
}