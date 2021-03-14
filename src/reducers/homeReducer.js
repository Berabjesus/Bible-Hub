import * as homeTypes from '../types/homeTypes'

const initialState = {
  loading: false,
  bibles: [],
  error: '',
  stored: false
}

const homeReducer = (state = initialState, action) =>{
  switch (action.type) {
    case homeTypes.BIBLE_VERSIONS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case homeTypes.BIBLE_VERSIONS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        bibles: action.payload,
        stored: true,
      }
    case homeTypes.BIBLE_VERSIONS_FETCH_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state;
  }
}

export default homeReducer