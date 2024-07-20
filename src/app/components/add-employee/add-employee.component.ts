import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { v4 as uuidv4 } from "uuid";
import { Store } from "@ngrx/store";
import { addEmployees, updateEmployees } from "../../_store/employee/employee.actions";

@Component({
  selector: "app-add-employee",
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: "./add-employee.component.html",
  styleUrl: "./add-employee.component.scss",
})
export class AddEmployeeComponent implements OnInit {
  _employeeForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern('^[0][0-9]{9}$')
    ]),
    address: new FormControl("", [Validators.required]),
    selected: new FormControl(false)
  });

  constructor(
    @Inject (MAT_DIALOG_DATA) public data:any,
    private MatDialog: MatDialogRef<AddEmployeeComponent>,
    private store: Store
  ) {}

  ngOnInit(): void {
    if(this.data.action == 'edit') {
      this._employeeForm.patchValue({
        name: this.data.employee.name,
        email: this.data.employee.email,
        phone: this.data.employee.phone,
        address: this.data.employee.address
      })
    }
  }

  close(status:boolean = false) {
    this.MatDialog.close(status);
  }

  newEmployeeSubmission() {
    const data = this._employeeForm.value,
      id = uuidv4();
    switch(this.data.action) {
      case "add":
        Object.assign(data, { id: id });
        this.store.dispatch(addEmployees({ inputdata: data }));
        this.close(true);
      break;
      case "edit":
        Object.assign(data, { id: this.data.employee.id });
        this.store.dispatch(updateEmployees({ inputdata: data }));
        this.close(true);
      break;
    }
  }
}
