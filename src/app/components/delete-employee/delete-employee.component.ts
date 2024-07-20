import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { deleteEmployees } from '../../_store/employee/employee.actions';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.scss'
})
export class DeleteEmployeeComponent {

  constructor( @Inject (MAT_DIALOG_DATA) public data:any,
  private MatDialog: MatDialogRef<DeleteEmployeeComponent>,
  private store: Store) 
  {
    console.log(data)
  }

  close(status:boolean = false) {
    this.MatDialog.close(status);
  }

  deleteEmployee() {
    if(!this.data.deleteAll) this.store.dispatch(deleteEmployees({id:this.data.employee.id as string}));
    else {
      this.data.selectedEmployeesIds.forEach((id:string) => {
        this.store.dispatch(deleteEmployees({id:id}));
      });
    }
    this.close(true);
  }
}
