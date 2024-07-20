import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { Router } from '@angular/router';
import { EmployeesTableComponent } from "../../components/employees-table/employees-table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, EmployeesTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router:Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
