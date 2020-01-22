import { SCHOOL_LIST, CATEGORIES, SCHOOL } from "./constant";

const initialState = {
  listOfSchools: [],
  categories: [],
  school: {}
};
export default function schoolReducer(state = initialState, action) {
  switch (action.type) {
    case SCHOOL_LIST:
      return {
        ...state,
        listOfSchools: action.payload
      };
    case SCHOOL:
      return {
        ...state,
        school: action.payload
      };
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}
