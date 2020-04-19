import { combineReducers } from 'redux'
import mapa from './mapa'
import bandeja from './bandeja'
import menu from './menu'

export default combineReducers({
  mapa,
  bandeja,
  menu
})