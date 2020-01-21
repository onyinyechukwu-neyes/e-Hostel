import {LOAD_LISTOFSCHOOLS} from "./constant"

const initialState = {
    listOfSchools : []
}
export default function schoolReducer(state = initialState, action){
    switch(action.type){
        case LOAD_LISTOFSCHOOLS:
        return {
            ...state,
            listOfSchools: action.payload
        }
        default:
        return state;
    }
}