import { createAction, props } from "@ngrx/store";
import { User } from "../../interfaces/user";

// LOAD EMPLOYEES
export const LOAD_EMPLOYEE = "[employee] load employee";
export const LOAD_EMPLOYEE_SUCCESS = "[employee] load employee success";
export const LOAD_EMPLOYEE_FAIL = "[employee] load employee fail";

export const loadEmployees = createAction(LOAD_EMPLOYEE);
export const loadEmployeesSuccess = createAction( LOAD_EMPLOYEE_SUCCESS, props<{ list: User[] }>());
export const loadEmployeesFail = createAction( LOAD_EMPLOYEE_FAIL, props<{ errorMessage: string }>());


// ADD NEW EMPLOYEE
export const ADD_EMPLOYEE = "[employee] add employee";
export const ADD_EMPLOYEE_SUCCESS = "[employee] add employee success";
export const ADD_EMPLOYEE_FAIL = "[employee] load employee fail";

export const addEmployees = createAction(ADD_EMPLOYEE, props<{ inputdata: User }>());
export const addEmployeesSuccess = createAction( ADD_EMPLOYEE_SUCCESS);

// UPDATE EMPLOYEE
export const UPDATE_EMPLOYEE = "[employee] update employee";
export const UPDATE_EMPLOYEE_SUCCESS = "[employee] update employee success";

export const updateEmployees = createAction(UPDATE_EMPLOYEE, props<{ inputdata: User }>());
export const updateEmployeesSuccess = createAction( UPDATE_EMPLOYEE_SUCCESS);


// DELETE EMPLOYEE
export const DELETE_EMPLOYEE = "[employee] delete employee";
export const DELETE_EMPLOYEE_SUCCESS = "[employee] delete employee success";

export const deleteEmployees = createAction(DELETE_EMPLOYEE, props<{ id:string }>());
export const deleteEmployeesSuccess = createAction( DELETE_EMPLOYEE_SUCCESS);


//SHOW ALERT
export const SHOW_ALERT = "[employee] show alert";
export const showAlert = createAction(SHOW_ALERT, props<{ message:string,resptype:string }>());

