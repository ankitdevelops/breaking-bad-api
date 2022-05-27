import { ActionTypes } from "../constants/action-types"

const initialState = {
    characters:[],
}

export const charactersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_CHARACTERS:
            return {...state, characters:payload}
        default:
            return state
           
    }
}



