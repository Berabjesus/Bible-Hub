import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import home from './homeReducer';
import passagesReducer from './passagesReducer';
import contentReducer from './contentReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  home,
  passage: passagesReducer,
  content: contentReducer,
  filtered: filterReducer,
});

export default rootReducer;
