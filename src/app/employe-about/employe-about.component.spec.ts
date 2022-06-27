import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAboutComponent } from './employe-about.component';

describe('EmployeAboutComponent', () => {
  let component: EmployeAboutComponent;
  let fixture: ComponentFixture<EmployeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
