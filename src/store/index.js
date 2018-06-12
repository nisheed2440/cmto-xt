import { createStore, applyMiddleware } from "redux";
import thunk  from 'redux-thunk';

export default createStore(() => {},
applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
