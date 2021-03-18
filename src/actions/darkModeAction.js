import * as darkModeTypes from '../types/darkModeTypes';

export const setDark = color => ({
  type: darkModeTypes.DARK,
  payload: color,
});

export const setLite = () => ({
  type: darkModeTypes.LITE,
});
