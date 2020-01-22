import {combineReducers} from "redux"
import schools from "./Schools/reducer"
import school from "./School/reducer"

const rootReducer = combineReducers({
    schools,
    school
})

export default rootReducer;