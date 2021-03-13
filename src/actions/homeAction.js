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
    fetch('https://jsonplaceholder.typicode.com/users')
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