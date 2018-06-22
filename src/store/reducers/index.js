import { combineReducers } from "redux";
import tab from "./tabReducer";
import scheduleInfo from "./scheduleReducer";
import filterTags from './filterReducer';

export default combineReducers({
  tab,
  scheduleInfo,
  filterTags
});
