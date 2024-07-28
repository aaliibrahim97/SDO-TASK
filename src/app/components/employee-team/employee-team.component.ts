import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
export interface Team {
  name: string;
  job:string;
  score: number;
  avatar:string;
  thisMonth: number;
  lastMonth: number;
  dotColor1:string;
  dotColor2:string;
}

const ELEMENT_DATA: Team[] = [
  { 
    name: 'Alena Gouse', 
    job:"UI Designer / Q1",
    avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=35&h=35&q=80',
    score: 201, 
    thisMonth: 20.5, 
    lastMonth: 40,
    dotColor1:'#1968ce', 
    dotColor2:'#009b27', 
  },
  { 
    name: 'Alan Walker', job:"UI Designer / Q2",
    avatar:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=35&h=35&q=80',
    score: 222, 
    thisMonth: 20.3, 
    lastMonth: 50.4,
    dotColor1:'#009b27',
    dotColor2:'#f83c3c',    
  },
  { 
    name: 'Mircale Vetors', 
    job:"UI Designer / Q3", 
    avatar:'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=35&h=35&q=80',
    score: 210, 
    thisMonth: 90.4, 
    lastMonth: 80.2,
    dotColor1:'#f83c3c',
    dotColor2:'#009b27',    
  },
  { 
    name: 'Avery Awrood', 
    job:"UI Designer / Q4", 
    avatar:'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=35&h=35&q=80',
    score: 204, 
    thisMonth: 77, 
    lastMonth: 84.2,
    dotColor1:'#f6db60',  
    dotColor2:'#f83c3c',  
  },
  { 
    name: 'John Flice', 
    job:"UI Designer / Q5",
    avatar:'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=35&h=35&q=80',
    score: 230, 
    thisMonth: 90.2, 
    lastMonth: 80.4,  
    dotColor1:'#009b27', 
    dotColor2:'#f6db60', 
  },
];

@Component({
  selector: 'app-employee-team',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './employee-team.component.html',
  styleUrl: './employee-team.component.scss'
})
export class EmployeeTeamComponent {
  displayedColumns: string[] = ['name', 'score', 'thisMonth', 'lastMonth'];
  dataSource = ELEMENT_DATA;
}
