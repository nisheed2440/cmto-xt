import { UPDATE_MAIN_LOADER } from "../actions";

function loaderReducer(state = { isVisible: true }, action) {
  switch (action.type) {
    case UPDATE_MAIN_LOADER:
      return Object.assign({}, state, {
        isVisible: action.value
      });
    default:
      return state;
  }
}

export default loaderReducer;
