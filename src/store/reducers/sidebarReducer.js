import { TOGGLE_SIDEBAR } from "../actions";

function sidebarReducer(state = { isOpen: false}, action) {
    switch (action.type) {
      case TOGGLE_SIDEBAR:
        return Object.assign({}, state, {
          isOpen: action.value
        });
      default:
        return state;
    }
  }
  
  export default sidebarReducer;