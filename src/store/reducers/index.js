import { combineReducers } from "redux";
import tab from "./tabReducer";
import sessions from "./sessionReducer";
import sidebar from './sidebarReducer';
import loader from './loaderReducer';

export default combineReducers({
  tab,
  sessions,
  sidebar,
  loader
});
