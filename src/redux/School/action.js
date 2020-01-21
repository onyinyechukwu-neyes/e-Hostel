import { SCHOOL_LIST, CATEGORIES } from "./constant";
import { schools, categories } from "../../API/Details";

export function loadCategoriesSuccess(payload) {
  return { type: CATEGORIES, payload };
}
export function loadListOfschoolsSuccess(payload) {
  return {
    type: SCHOOL_LIST,
    payload
  };
}

export function LoadCategories() {
  return function(dispatch) {
    let cat = categories;

    if (cat !== undefined) {
      dispatch(loadCategoriesSuccess(cat));
    }
    return cat;
  };
}

export function LoadListOfSchools(id) {
  return function(dispatch) {
    let fetchSchool = schools.filter(school => school.catId === parseInt(id));

    if (fetchSchool !== undefined) {
      dispatch(loadListOfschoolsSuccess(fetchSchool));
    }
    return fetchSchool;
  };
}
