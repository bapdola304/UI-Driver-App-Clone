import { combineReducers } from "redux";

import listFile from "./File"
import authLogin from "./authLogin"



const myReducer = combineReducers({
    listFile,
    authLogin
  });
  
  export default myReducer;