import * as contentTypes from '../types/contentTypes'

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