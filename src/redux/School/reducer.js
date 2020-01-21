import { SCHOOL_LIST, CATEGORIES } from "./constant";

const initialState = {
  listOfSchools: [],
  categories: []
};
export default function schoolReducer(state = initialState, action) {
  switch (action.type) {
    case SCHOOL_LIST:
      return {
        ...state,
        listOfSchools: action.payload
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
