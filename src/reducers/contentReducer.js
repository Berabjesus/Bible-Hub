import * as contentTypes from '../types/contentTypes'

const initialState = {
  background: 'white',
  color: '#100C1A'
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case contentTypes.DARK:
      return {
        ...state,
        background: action.payload,
        color: 'white',
      }
    case contentTypes.LITE:
      return {
        ...state,
        background: 'white',
        color: '#100C1A'
      }
    default: return state;
  }
}
export default contentReducer;