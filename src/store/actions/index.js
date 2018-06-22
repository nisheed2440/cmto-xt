import axios from 'axios';
import store from "../index"

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}


export function fetchScheduleInfo(){
  axios.get("https://api.myjson.com/bins/x87ta")
  .then((response) => {
    console.log(response);
    store.dispatch({
      type : "FETCH_SCHEDULE_INFO",
      payload : response.data
    })
  })
  .catch((err) => {
    console.log(err);
    store.dispatch({
      type : "FETCH_SCHEDULE_INFO",
      payload : err
    })
  })
}


export function fetchFilterTags(){
  axios.get("https://api.myjson.com/bins/1246ou")
  .then((response) => {
    console.log(response);
    store.dispatch({
      type : "FETCH_FILTER_TAGS",
      payload : response.data
    })
  })
  .catch((err) => {
    console.log(err);
    store.dispatch({
      type : "FETCH_FILTER_TAGS",
      payload : err
    })
  })
}



export function fetchSessionDetails(sessionID) {
  axios.get('https://api.myjson.com/bins/ccy7m')
  .then((response) => {
    console.log(response);
    store.dispatch({
      type : "FETCH_SESSION_DETAILS",
      payload : response.data
    })
  })
  .catch((err) => {
    console.log(err);
    store.dispatch({
      type : "FETCH_SESSION_DETAILS",
      payload : err
    })
  })
}
export const UPDATE_TAB = "UPDATE_TAB";
export const FETCH_SCHEDULE_INFO = "FETCH_SCHEDULE_INFO";
export const FETCH_FILTER_TAGS = "FETCH_FILTER_TAGS";
export const FETCH_SESSION_DETAILS = 'FETCH_SESSION_DETAILS';

export const actionUpdateTab = makeActionCreator(UPDATE_TAB, "value");
export const actionFetchScheduleInfo = makeActionCreator(FETCH_SCHEDULE_INFO, "value");
export const actionFetchFilterTags = makeActionCreator(FETCH_FILTER_TAGS, "value");
export const actionFetchSessionDetails = makeActionCreator(FETCH_SESSION_DETAILS, "value");
