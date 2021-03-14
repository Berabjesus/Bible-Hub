import * as contentTypes from '../types/contentTypes'

const initialState = {
  loading: false,
  content: {},
  error: '',
}

const contentReducer = (state = initialState, action) =>{
  switch (action.type) {
    case contentTypes.CONTENT_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case contentTypes.CONTENT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload,
      }
    case contentTypes.CONTENT_FETCH_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state;
  }
}

export default contentReducer