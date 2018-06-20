import { combineReducers } from "redux";
import tab from "./tabReducer";
import scheduleInfo from "./scheduleReducer";

export default combineReducers({
  tab,
  scheduleInfo
});
