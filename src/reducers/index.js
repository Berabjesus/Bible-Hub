import {combineReducers} from 'redux'
import darkModeReducer from './darkModeReducer'
import home from './homeReducer'

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  home: home
})

export default rootReducer