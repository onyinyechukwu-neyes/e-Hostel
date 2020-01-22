import {combineReducers} from "redux"
import schools from "./Schools/reducer"


const rootReducer = combineReducers({
    schools,
    
})

export default rootReducer;