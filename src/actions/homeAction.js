import * as homeType from '../types/homeType'

export const biblesLoading = () => {
  return {
    type: homeType.FETCH_REQUEST
  }
}

export const biblesFetchSuccess = (data) => {  
  return {
    type: homeType.FETCH_SUCCESS,
    payload: data
  }
}

export const biblesFetchFail = (data) => {
  return {
    type: homeType.FETCH_FAIL,
    payload:data
  }
}

export const fetchBibles= () => {
  return (dispatch) => {    
    dispatch(biblesLoading())
    console.log('loading');
    
    fetch('https://thingproxy.freeboard.io/fetch/http://api.biblia.com/v1/bible/find.txt?key=fd37d8f28e95d3be8cb4fbc37e15e18e')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        
       dispatch(biblesFetchSuccess(data))
       return data;
      })
      .catch(error => {
       dispatch(biblesFetchFail(error.message))
       return error
      })
  }
}