import { combineReducers } from "@reduxjs/toolkit";
import camapaign from "../redux/slices/Campaign"

const rootReducer=combineReducers({
      campaign:camapaign
})

export default rootReducer