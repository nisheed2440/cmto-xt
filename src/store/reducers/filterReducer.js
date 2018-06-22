import { FETCH_FILTER_TAGS } from "../actions";

function filterTags(state = { filterTags: []}, action) {
  switch (action.type) {
    case FETCH_FILTER_TAGS:
      console.log(action.payload);
      return Object.assign({}, state, {
        filterTags: action.payload
      });
    default:
      return state;
  }
}

export default filterTags;
