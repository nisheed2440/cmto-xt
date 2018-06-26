import {
  FETCHED_SCHEDULE_INFO,
  FETCHED_FILTER_TAGS
} from "../actions";

function sessionReducer(
  state = { data: [], filters: [] },
  action
) {
  switch (action.type) {
    case FETCHED_SCHEDULE_INFO:
      return Object.assign({}, state, {
        data: action.value
      });
    case FETCHED_FILTER_TAGS:
      return Object.assign({}, state, {
        filters: action.value
      });
    default:
      return state;
  }
}

export default sessionReducer;
