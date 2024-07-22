import { EmployeesService } from "../../services/employees.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  addEmployees,
  addEmployeesSuccess,
  deleteEmployees,
  deleteEmployeesSuccess,
  loadEmployees,
  loadEmployeesFail,
  loadEmployeesSuccess,
  showAlert,
  updateEmployees,
  updateEmployeesSuccess,
} from "./employee.actions";
import { ObservableInput, catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { MessageService } from "primeng/api";

@Injectable()
export class employeeEffects {
  constructor(
    private $actions: Actions,
    private employeesService: EmployeesService,
    private messageService: MessageService
  ) {}

  _loadEmployee = createEffect(() =>
    this.$actions.pipe(
      ofType(loadEmployees),
      exhaustMap((_action) => {
        return this.employeesService.getEmployeesList().pipe(
          map((data) => {
            return loadEmployeesSuccess({ list: data });
          }),
          catchError((_err) => of(loadEmployeesFail({ errorMessage: _err })))
        );
      })
    )
  );

  _addEmployee = createEffect(() =>
    this.$actions.pipe(
      ofType(addEmployees),
      switchMap((action) => {
        return this.employeesService.addEmployee(action.inputdata).pipe(
          switchMap(() => {
            return of(
              addEmployeesSuccess(),
              showAlert({
                message: "Employee added successfully",
                resptype: "success",
              })
            );
          }),
          catchError((_err) =>
            of(showAlert({ message: "Fail to Add Employee", resptype: "fail" }))
          )
        );
      })
    )
  );

  _updateEmployee = createEffect(() =>
    this.$actions.pipe(
      ofType(updateEmployees),
      switchMap((action) => {
        return this.employeesService.updateEmployee(action.inputdata).pipe(
          switchMap(() => {
            return of(
              updateEmployeesSuccess(),
              showAlert({
                message: "Employee updated successfully",
                resptype: "success",
              })
            );
          }),
          catchError((_err) =>
            of(
              showAlert({
                message: "Fail to update Employee",
                resptype: "fail",
              })
            )
          )
        );
      })
    )
  );

  _deleteEmployee = createEffect(() =>
    this.$actions.pipe(
      ofType(deleteEmployees),
      switchMap((action) => {
        return this.employeesService.deleteEmployee(action.id).pipe(
          switchMap(() => {
            return of(
              deleteEmployeesSuccess(),
              showAlert({
                message: "Employee deleted successfully",
                resptype: "success",
              })
            );
          }),
          catchError((_err) =>
            of(
              showAlert({
                message: "Fail to delete Employee",
                resptype: "fail",
              })
            )
          )
        );
      })
    )
  );

  _showAlert = createEffect(()=> 
      this.$actions.pipe(
        ofType(showAlert),
        exhaustMap((action)=>{
          return this.showAlert(action.message, action.resptype) as unknown as ObservableInput<any>
        })
      )
  )

  showAlert(message:string, resptype:string) {
    return this.messageService.add({ 
      severity: resptype == 'fail' ? 'error' : 'success', 
      summary: resptype == 'fail' ? 'Error' : 'Success',
      detail: message 
    }) 

  }
}
