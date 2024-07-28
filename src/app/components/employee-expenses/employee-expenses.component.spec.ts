import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExpensesComponent } from './employee-expenses.component';

describe('EmployeeExpensesComponent', () => {
  let component: EmployeeExpensesComponent;
  let fixture: ComponentFixture<EmployeeExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeExpensesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
