import * as homeTypes from '../types/homeTypes'

const initialState = {
  loading: false,
  bibles: [],
  error: ''
}

const homeReducer = (state = initialState, action) =>{
  switch (action.type) {
    case userType.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case userType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        bibles: action.payload,
      }
    case userType.FETCH_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state;
  }
}

export default homeReducer