import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComparisonComponent } from './employees-comparison.component';

describe('EmployeesComparisonComponent', () => {
  let component: EmployeesComparisonComponent;
  let fixture: ComponentFixture<EmployeesComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
