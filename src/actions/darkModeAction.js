import * as darkModeTypes from '../types/darkModeTypes'

export const setDark = (color) => {
  return {
    type: darkModeTypes.DARK,
    payload: color
  }
}

export const setLite = () => {
  return {
    type: darkModeTypes.LITE
  }
}