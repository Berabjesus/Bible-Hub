import {combineReducers} from 'redux'
import darkModeReducer from './darkModeReducer'
import home from './homeReducer'
import passagesReducer from './passagesReducer'
import contentReducer from './contentReducer'
const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  home: home,
  passage: passagesReducer,
  content: contentReducer
})

export default rootReducer