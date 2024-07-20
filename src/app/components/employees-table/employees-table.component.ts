import { AddEditEmployeeComponent } from "./../add-edit-employee/add-edit-employee.component";
import {
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SelectionModel } from "@angular/cdk/collections";
import { ButtonModule } from "primeng/button";
import { Store } from "@ngrx/store";
import { User } from "../../interfaces/user";
import { loadEmployees } from "../../_store/employee/employee.actions";
import { getEmployeeList } from "../../_store/employee/employee.selector";
import { MatDialog } from "@angular/material/dialog";
import { DeleteEmployeeComponent } from "../delete-employee/delete-employee.component";
import { FormsModule } from "@angular/forms";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { BubblePaginationDirective } from "../../directives/bubble-pagination.directive";

@Component({
  selector: "app-employees-table",
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    ButtonModule,
    FormsModule,
    MatPaginatorModule,
    BubblePaginationDirective,
  ],
  templateUrl: "./employees-table.component.html",
  styleUrl: "./employees-table.component.scss",
})
export class EmployeesTableComponent implements OnInit {
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
  @ViewChild("paginator") paginator!: MatPaginator;

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
    this.checkDeleteAll();
  }

  checkDeleteAll(): void {
    if (this.selectedEmployeesIds.length >= 2) this.allowDeleteAll = true;
    else this.allowDeleteAll = false;
  }

  dispatchUsers() {
    this.store.dispatch(loadEmployees());
    this.store.select(getEmployeeList).subscribe((data) => {
      data = data.filter((x, i) => i !== 0);
      this.employees = [...data];
      this.dataSource = new MatTableDataSource<User>(this.employees);
      this.dataSource.paginator = this.paginator;
    });
  }

  addNewEmployees(action: string, employee = {}): void {
    const dialogRef = this.dialog.open(AddEditEmployeeComponent, {
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
      if (r) {
        this.dispatchUsers();
        this.selection.clear();
        this.allowDeleteAll = false;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
