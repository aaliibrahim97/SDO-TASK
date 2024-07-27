import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeeCanvasComponent } from './add-edit-employee-canvas.component';

describe('AddEditEmployeeCanvasComponent', () => {
  let component: AddEditEmployeeCanvasComponent;
  let fixture: ComponentFixture<AddEditEmployeeCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditEmployeeCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditEmployeeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
