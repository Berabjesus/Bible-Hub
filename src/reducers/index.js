import {combineReducers} from 'redux'
import darkModeReducer from './darkModeReducer'
import home from './homeReducer'
import passagesReducer from './passagesReducer'

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  home: home,
  passage: passagesReducer
})

export default rootReducer