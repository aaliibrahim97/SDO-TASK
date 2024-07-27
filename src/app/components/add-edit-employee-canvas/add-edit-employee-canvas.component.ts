import { CanvasService } from './../../services/canvas.service';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from "@angular/core";
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
import {
  addEmployees,
  updateEmployees,
} from "../../_store/employee/employee.actions";
import { User } from "../../interfaces/user";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { ICanvas } from '../../interfaces/canvas';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-add-edit-employee-canvas',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-edit-employee-canvas.component.html',
  styleUrl: './add-edit-employee-canvas.component.scss'
})
export class AddEditEmployeeCanvasComponent implements OnInit, OnDestroy {
  action!:string;
  data!:User;
  @ViewChild('content') content!:TemplateRef<any>
  private $destroy:Subject<any> = new Subject<boolean>();
  _employeeForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0][0-9]{9}$"),
    ]),
    address: new FormControl("", [Validators.required]),
  });

  constructor(private offcanvasService:NgbOffcanvas, private store: Store, private canvasService:CanvasService) {}

  ngOnInit(): void {
    this.canvasService.$canvasInfo.pipe(takeUntil(this.$destroy)).subscribe((canvas:ICanvas) => {
      if(canvas?.status) {
        this.openCanvas();
        this.data = canvas.data;
        this.action = canvas?.action;
        if(canvas?.action == 'edit') {
          this.patchEmployeesValues();
        }
        else this.resetForm(); 
      }
    })
  }
  
  openCanvas() {
		this.offcanvasService.open(this.content, { position: 'end', backdrop: 'static' });
	}

  patchEmployeesValues() {
      this._employeeForm.patchValue({
        name: this.data.name,
        email: this.data.email,
        phone: this.data.phone,
        address: this.data.address
      });
  }

  resetForm() {
    this._employeeForm.reset({
      name: '',
      email: '',
      phone: '',
      address: ''}
    )
  }

  newEmployeeSubmission() {
    const data = this._employeeForm.value,
      id = uuidv4();
    switch (this.action) {
      case "add":
        Object.assign(data, { id: id });
        this.store.dispatch(addEmployees({ inputdata: data }));
        this.close(true);
        break;
      case "edit":
        Object.assign(data, { id: this.data.id });
        this.store.dispatch(updateEmployees({ inputdata: data }));
        this.close(true);
        break;
    }
  }
 
  close(status: boolean = false) {
    this.canvasService.closeCanvas(status);
    this.offcanvasService.dismiss();
  }

  ngOnDestroy(): void {
    this.$destroy.next(null);
    this.$destroy.unsubscribe();
  }

}
