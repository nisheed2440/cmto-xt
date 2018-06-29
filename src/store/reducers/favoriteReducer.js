import { FAV_SESSION } from "../actions";

function favorite(state = { favButtonClass: false }, action) {
  switch (action.type) {
    case FAV_SESSION:
      return Object.assign({}, state, {
        favButtonClass: action.value
      });
    default:
      return state;
  }
}

export default favorite;