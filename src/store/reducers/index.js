import { combineReducers } from "redux";
import tab from "./tabReducer";
import sessions from "./sessionReducer";
import sidebar from './sidebarReducer';

export default combineReducers({
  tab,
  sessions,
  sidebar
});
