import { combineReducers } from "redux";
import waivers from "./waivers";
import { waiversApi } from "./waivers/services";

export default combineReducers({
  waivers,
  [waiversApi.reducerPath]: waiversApi.reducer,
});
