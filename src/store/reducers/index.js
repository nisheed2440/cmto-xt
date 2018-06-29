import { combineReducers } from "redux";
import tab from "./tabReducer";
import sessions from "./sessionReducer";
import sidebar from './sidebarReducer';
import favSession from './favoriteReducer';

export default combineReducers({
  tab,
  sessions,
  sidebar,
  favSession
});
