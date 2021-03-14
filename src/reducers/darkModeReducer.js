import * as darkModeTypes from '../types/darkModeTypes'

const initialState = {
  background: 'white',
  color: '#100C1A'
}

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case darkModeTypes.DARK:
      return {
        ...state,
        background: action.payload,
        color: 'white',
      }
    case darkModeTypes.LITE:
      return {
        ...state,
        background: 'white',
        color: '#100C1A'
      }
    default: return state;
  }
}
export default darkModeReducer;