import { createReducer, on } from "@ngrx/store";
import { employeeState } from "./employee.state";
import { loadEmployeesFail, loadEmployeesSuccess } from "./employee.actions";

const _employeeReducer = createReducer(employeeState,
    on(loadEmployeesSuccess,(state,action)=>{
        return { 
            ...state,
            list:action.list,
            errorMessage:''
        }
    }),
    on(loadEmployeesFail,(state,action)=>{
        return { 
            ...state,
            list:[],
            errorMessage:action.errorMessage
        }
    })
);

export function employeeReducer (state:any, action:any) {
    return _employeeReducer(state, action);
}