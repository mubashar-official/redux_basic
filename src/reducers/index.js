import changeTheNumber from "./UpDown";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeTheNumber,
    // next reducer if you have more than one reducers
})

export default rootReducer;