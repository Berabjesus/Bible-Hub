import * as homeTypes from '../types/homeType'

const initialState = {
  loading: false,
  bibles: [],
  error: '',
  stored: false
}

const homeReducer = (state = initialState, action) =>{
  switch (action.type) {
    case homeTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case homeTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        bibles: action.payload,
        stored: true,
      }
    case homeTypes.FETCH_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state;
  }
}

export default homeReducer