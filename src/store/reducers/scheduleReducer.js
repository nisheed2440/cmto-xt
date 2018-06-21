import { FETCH_SCHEDULE_INFO } from "../actions";

function scheduleInfo(state = { scheduleInfo: [] }, action) {
  switch (action.type) {
    case FETCH_SCHEDULE_INFO:
      console.log(action);
      return Object.assign({}, state, {
        scheduleInfo: action.payload
      });
    default:
      return state;
  }
}

export default scheduleInfo;
