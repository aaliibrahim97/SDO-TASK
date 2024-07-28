import { Component } from '@angular/core';
import { EmployeeDetailsLayoutComponent } from "../../components/employee-details-layout/employee-details-layout.component";
import { EmployeeAnalyticsComponent } from "../../components/employee-analytics/employee-analytics.component";
import { EmployeeTeamComponent } from "../../components/employee-team/employee-team.component";
import { EmployeesComparisonComponent } from "../../components/employees-comparison/employees-comparison.component";
import { EmployeeExpensesComponent } from "../../components/employee-expenses/employee-expenses.component";

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [EmployeeDetailsLayoutComponent, EmployeeAnalyticsComponent, EmployeeTeamComponent, EmployeesComparisonComponent, EmployeeExpensesComponent],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {

}
