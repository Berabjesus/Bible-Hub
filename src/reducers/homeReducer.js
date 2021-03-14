import * as loadType from '../types/loadType'

const initialState = {
  loading: false,
  bibles: [],
  error: '',
  stored: false
}

const homeReducer = (state = initialState, action) =>{
  switch (action.type) {
    case loadType.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case loadType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        bibles: action.payload,
        stored: true,
      }
    case loadType.FETCH_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state;
  }
}

export default homeReducer