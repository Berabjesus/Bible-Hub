import * as contentTypes from '../types/darkModeTypes'

export const setDark = (color) => {
  return {
    type: contentTypes.DARK,
    payload: color
  }
}

export const setLite = () => {
  return {
    type: contentTypes.LITE
  }
}