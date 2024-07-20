import { Component } from '@angular/core';
import { UsersTableComponent } from "../../components/users-table/users-table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
