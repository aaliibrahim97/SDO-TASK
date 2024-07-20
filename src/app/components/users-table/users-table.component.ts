import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SelectionModel } from "@angular/cdk/collections";
import { ButtonModule } from "primeng/button";
import { Store, select } from "@ngrx/store";
// import * as userActions from "../../state/user.actions"
// import * as fromUser from "../../state/user.reducer"
import { User } from "../../interfaces/user";
import { Observable } from "rxjs";
import { loadEmployees } from "../../_store/employee/employee.actions";
import { getEmployeeList } from "../../_store/employee/employee.selector";
import { MatDialog } from "@angular/material/dialog";
import { AddEmployeeComponent } from "../add-employee/add-employee.component";
import { DeleteEmployeeComponent } from "../delete-employee/delete-employee.component";
import { FormsModule } from "@angular/forms";

export interface PeriodicElement {
  selected: boolean;
  email: string;
  name: string;
  address: string;
  phone: string;
}

@Component({
  selector: "app-users-table",
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, ButtonModule, FormsModule],
  templateUrl: "./users-table.component.html",
  styleUrl: "./users-table.component.scss",
})
export class UsersTableComponent implements OnInit {
  dataSource = new MatTableDataSource<User>([]);
  displayedColumns: string[] = [
    "select",
    "email",
    "name",
    "address",
    "phone",
    "actions",
  ];
  selectAll: boolean = false;
  employees: User[] = [];
  selectedEmployeesIds: string[] = [];
  allowDeleteAll: boolean = false;
  selection = new SelectionModel<User>(true, []);

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dispatchUsers();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  logSelection() {
    this.selectedEmployeesIds = [];
    this.selection.selected.forEach((s) => 
      this.selectedEmployeesIds.push(s.id)
    );
    if (this.selectedEmployeesIds.length >= 2) this.allowDeleteAll = true;
    else this.allowDeleteAll = false;
  }

  dispatchUsers() {
    this.store.dispatch(loadEmployees());
    this.store.select(getEmployeeList).subscribe((data) => {
      data = data.filter((x, i) => i !== 0);
      this.employees = [...data];
      this.dataSource = new MatTableDataSource<User>(this.employees);
    });
  }

  addNewEmployees(action: string, employee = {}): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: "30vw",
      data: {
        action,
        employee,
      },
    });
    dialogRef.afterClosed().subscribe((r) => {
      if (r) this.dispatchUsers();
    });
  }

  deleteEmployee(employee = {}, deleteAll = false): void {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: "30vw",
      data: {
        employee,
        deleteAll,
        selectedEmployeesIds: this.selectedEmployeesIds,
      },
    });
    dialogRef.afterClosed().subscribe((r) => {
      if (r) this.dispatchUsers();
    });
  }
}
