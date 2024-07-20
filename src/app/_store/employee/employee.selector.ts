import { createFeatureSelector, createSelector } from "@ngrx/store";
import { employeeModel } from "../../interfaces/user";

const getEmployeeState = createFeatureSelector<employeeModel>("employee");

export const getEmployeeList = createSelector(getEmployeeState, (state) => {
  return state.list;
});
