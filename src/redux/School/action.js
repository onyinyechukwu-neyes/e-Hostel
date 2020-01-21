import {LOAD_LISTOFSCHOOLS} from "./constant"
import {schools} from "../../API/Details"




export function loadListOfschoolsSuccess(payload){
    return {
        type: LOAD_LISTOFSCHOOLS,
        payload
    }
}


export function LoadListOfSchools(id){
    return function(dispatch){
     let fetchSchool = schools.filter(school => school.catId === parseInt(id))
    
        if (fetchSchool !== undefined){
            dispatch(loadListOfschoolsSuccess(fetchSchool))
        }
        return fetchSchool.payload;
    }
    
}

