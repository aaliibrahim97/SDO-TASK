import { AuthService } from './../../services/auth.service';
import { Component } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

interface Login {
  username:string;
  password:string;
}

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],

  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {

  constructor(private authService:AuthService, private router:Router, private messageService:MessageService) {}

  _loginForm:FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  }) 

  loginSubmission() {
    const { username, password } = this._loginForm.value;
    this.authService.loginSubmission(username).subscribe((res:any) => {
      if(res.length && res[0].password === password) {
        this.router.navigate(['/']);
        localStorage.setItem('username', username);
      }
      else this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Username or Password Is Incorrect' });
    },
    (_error) =>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something Went Wrong' });
    }
    )
  }

}
