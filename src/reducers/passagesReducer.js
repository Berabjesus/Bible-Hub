import * as loadType from '../types/loadType'

const initialState = {
  loading: false,
  passages: {},
  error: '',
}

const passagesReducer = (state = initialState, action) =>{
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
        passages: action.payload,
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

export default passagesReducer