import {SCHOOL} from "./constants"
import {schools} from "../../API/Details"

export function loadSchoolSuccess(payload){
    return{
        type: SCHOOL,
        payload
    }
}


export function LoadSchool(props){
    return function (dispatch){
        const schoolId = parseInt(props.match.params.id);

      let schoolInfo = schools.find(sch => sch.id === schoolId);
      if (schoolInfo !== undefined) {
        dispatch(loadSchoolSuccess(schoolInfo))
      } 
      return schoolInfo;
    }
}