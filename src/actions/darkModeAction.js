import * as contentTypes from '../types/darkModeType'

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