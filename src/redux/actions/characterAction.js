import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const getCharacters = (q) => {
	return async (dispatch) => {
		const response = await axios.get(
			`https://www.breakingbadapi.com/api/characters?name=${q}`
		);
		dispatch({
			type: ActionTypes.GET_CHARACTERS,
			payload: response.data,
		});
	};
};



