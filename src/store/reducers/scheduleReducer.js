import { FETCH_SCHEDULE_INFO, FETCH_SESSION_DETAILS } from "../actions";

function scheduleInfo(state = { scheduleInfo: [], sessionDetails:{} }, action) {
  switch (action.type) {
    case FETCH_SCHEDULE_INFO:
      return Object.assign({}, state, {
        scheduleInfo: action.payload
      });
    case FETCH_SESSION_DETAILS:
      console.log(action);
      return Object.assign({}, state, {
        sessionDetails: action.payload
      });
    default:
      return state;
  }
}

export default scheduleInfo;
