import { combineReducers } from "redux";
import { charactersReducer } from "./characterReducer";

const reducer = combineReducers({
	characters: charactersReducer,
});
export default reducer;
