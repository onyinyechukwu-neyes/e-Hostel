import {SCHOOL} from "./constants"

const initialState = {
    school: {}
}

export default function schoolReducer(state= initialState, action){
    switch(action.type){
        case SCHOOL:
            return {
                ...state,
                school: action.payload
            }
        default:
            return state
    }
}