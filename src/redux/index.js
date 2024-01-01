import { combineReducers } from "@reduxjs/toolkit";
import camapaign from "../redux/slices/Campaign"
import Id from "./slices/Id";

const rootReducer=combineReducers({
      campaign:camapaign,
      ids:Id
})

export default rootReducer